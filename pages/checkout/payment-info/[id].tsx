import React, { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import { useForm } from "react-hook-form";
import Cards, { Focused } from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";

import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CircularProgress } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../store";
import withHeaderSpacing from "../../../hoc/with-header-spacing";
import PageTitle from "../../../components/page-title";
import { IInstallmentsAPI, IOrder } from "../../../types";
import ModalAlert from "../../../components/modal/modal-alert";
import { client } from "../../../api";
import { useRouter } from "next/router";
import { IPaymentMethod, useSavePaymentMethod } from "../../../hooks";
import { orderIdSelector } from "../../../store/order";
import SelectInput from "../../../components/inputs/select-input";
import { moneyParser } from "../../../utils";
import { resetCart } from "../../../store/cart/actions/reset-cart";
import { resetOrder } from "../../../store/order/actions/reset-order";

interface Props {
  amount?: number;
  installments?: IInstallmentsAPI["data"]["creditcard"]["installments"];
}

interface CardForm {
  number: string;
  cvc: string;
  expiry: string;
  name: string;
  installment: string;
  brand: string;
}

const PaymentInfo: NextPage<Props> = ({ amount, installments }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const orderId = useAppSelector(orderIdSelector);

  const [focused, setFocused] = React.useState<Focused>();
  const [open, setOpen] = useState(false);

  const { mutateAsync: savePayment, isLoading, error } = useSavePaymentMethod();

  const { register, watch, handleSubmit, setValue } = useForm<CardForm>({
    defaultValues: {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      installment: "",
      brand: "",
    },
  });

  const number = watch("number");
  const cvc = watch("cvc");
  const name = watch("name");
  const expiry = watch("expiry");

  const onSubmit = async (data: CardForm) => {
    const payload: IPaymentMethod = {
      creditCard: {
        brand: data.brand,
        cvv: +data.cvc,
        exp_month: +data.expiry.slice(0, 2),
        exp_year: +data.expiry.slice(2, 6),
        holder: data.name,
        number: data.number,
      },
      method: "CREDIT_CARD",
      installment: +data.installment,
      orderId,
    };

    const resp = await savePayment(payload);

    if (resp.success) {
      dispatch(resetCart());
      dispatch(resetOrder());
      router.push(`/checkout/feedback/${orderId}`);
    }
  };

  const handleInputFocus = (e: any) => {
    setFocused(e.target.name);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Pagamento" />

      <Grid
        container
        spacing={4}
        style={{ marginTop: "1rem" }}
        justifyContent="center"
      >
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focused}
          name={name}
          number={number}
          placeholders={{ name: "Nome do titular" }}
          locale={{ valid: "valido até" }}
          callback={(data) => {
            if (data.issuer && data.issuer !== "unknown") {
              setValue("brand", data.issuer);
              return;
            }

            setValue("brand", "");
          }}
        />
        <Grid
          container
          spacing={3}
          item
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid xs={12} item>
            <TextField
              label="Número"
              {...register("number")}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Nome"
              {...register("name")}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Validade"
              {...register("expiry")}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="CVV"
              {...register("cvc")}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid xs={12} item>
            <SelectInput
              label="Parcelas"
              {...register("installment")}
              defaultValue=""
              options={installments?.map((i) => ({
                value: i.installment,
                label: `${i.installment} x ${moneyParser.format(
                  +i.monthly
                )} - Total: ${moneyParser.format(+i.total)}`,
              }))}
            />
          </Grid>

          <Grid item display="flex" width="100%" justifyContent="space-between">
            <Button
              style={{ marginTop: "2rem" }}
              startIcon={<ArrowBackIcon />}
              onClick={() => {
                router.push(`/antifraud/${orderId}`);
              }}
              variant="contained"
            >
              Voltar
            </Button>
            <Button
              style={{ marginTop: "2rem" }}
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              type="submit"
            >
              Continuar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ModalAlert
        open={open}
        setOpen={setOpen}
        message={
          (error as any)?.response?.data?.message ||
          "Não foi possível criar a ordem"
        }
        severity="error"
      />
      <Backdrop
        sx={{
          color: (theme) => theme.palette.common.white,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

const _PaymentInfo: NextPage<Props> = withHeaderSpacing(PaymentInfo);

_PaymentInfo.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;

  try {
    const { data } = await client.get<IOrder>(`/orders/detail/${id}`);

    const amount = data.totalAmount;

    const response = await client.get<IInstallmentsAPI>(
      `https://payment.carrin.io/payment/api/v1/checkout/simulate`,
      { params: { amount } }
    );
    const installments = response.data.data.creditcard.installments;

    return { amount, installments };
  } catch (error) {
    console.error(error);
  }

  return { amount: 0, installments: [] };
};

export default _PaymentInfo;
