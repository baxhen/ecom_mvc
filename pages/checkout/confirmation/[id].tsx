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
import { client } from "../../../api";
import { useRouter } from "next/router";
import { IPaymentMethod, useSavePaymentMethod } from "../../../hooks";
import { orderIdSelector } from "../../../store/order";
import SelectInput from "../../../components/inputs/select-input";
import { moneyParser } from "../../../utils";

interface Props {
  order?: any;
}

interface CardForm {
  number: string;
  cvv: string;
  expiry: string;
  name: string;
  installment: string;
  brand: string;
}

const Confirmation: NextPage<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const orderId = useAppSelector(orderIdSelector);

  const [focused, setFocused] = React.useState<Focused>();

  const { mutateAsync: savePayment, isLoading } = useSavePaymentMethod();

  const { register, watch, handleSubmit, setValue } = useForm<CardForm>({
    defaultValues: {
      number: "",
      name: "",
      expiry: "",
      cvv: "",
      installment: "",
      brand: "",
    },
  });

  const number = watch("number");
  const cvv = watch("cvv");
  const name = watch("name");
  const expiry = watch("expiry");

  const onSubmit = async (data: CardForm) => {
    // const payload: IPaymentMethod = {
    //   creditCard: {
    //     brand: data.brand.toUpperCase(),
    //     cvv: +data.cvv,
    //     exp_month: +data.expiry.slice(0, 2),
    //     exp_year: +data.expiry.slice(2, 6),
    //     holder: data.name,
    //     number: data.number,
    //   },
    //   method: "CREDIT_CARD",
    //   installment: +data.installment,
    //   orderId,
    // };
    // const resp = await savePayment(payload);
    // if (resp.success) {
    //   router.push(`/checkout/confirmation/${orderId}`);
    // }
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
      <PageTitle title="Confirmação" />

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

const _Confirmation: NextPage<Props> = withHeaderSpacing(Confirmation);

_Confirmation.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;

  try {
    const { data } = await client.get<IOrder>(`/orders/detail/${id}`);

    const order = data.data.orders;

    console.log({ order });

    return { order };
  } catch (error) {
    console.error(error);
  }

  return { order: null };
};

export default _Confirmation;
