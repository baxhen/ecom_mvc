import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, useWatch } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CircularProgress } from "@mui/material";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import {
  cartProductsItemsWithSkuAndQuantitySelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import PageTitle from "../../components/page-title";
import ModalAlert from "../../components/modal/modal-alert";
import { useCreateOrder } from "../../hooks";
import { addOrder } from "../../store/order";

const Checkout: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const productItems = useAppSelector(
    cartProductsItemsWithSkuAndQuantitySelector
  );

  const { register, watch, handleSubmit, getValues } = useForm<any>({
    defaultValues: { user: { sameBillingAddress: true } },
  });

  const {
    mutate: createOrder,
    isLoading,
    isSuccess,
    isError,
    data,
    error = "",
  } = useCreateOrder();

  const sameBillingAddress = watch("user.sameBillingAddress");

  const onSubmit = (data: any) => {
    const payload = { ...data, productItems };
    if (sameBillingAddress) {
      payload.user.billingAddress = payload.user.address;
    }

    createOrder(payload);
  };

  React.useEffect(() => {
    if (isSuccess) {
      const order: any = { ...getValues(), productItems, id: data.data.id };
      if (sameBillingAddress) {
        order.user.billingAddress = order.user.address;
      }
      dispatch(addOrder(order));

      router.push(`/checkout/antifraud/${order.id}`);
    }
  }, [isSuccess, data]);

  React.useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError, error]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Checkout" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          style={{ margin: "2rem 0" }}
          alignSelf="self-start"
          fontWeight={600}
        >
          Dados Pessoais
        </Typography>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid xs={12} item>
            <TextField label="CPF" {...register("user.cpf")} />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Email" {...register("user.email")} />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Nome" {...register("user.firstName")} />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Sobrenome" {...register("user.lastName")} />
          </Grid>
          <Grid xs={12} item>
            <TextField
              type="date"
              InputLabelProps={{ shrink: true }}
              label="Data de Nascimento"
              {...register("user.birthdate")}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Telefone" {...register("user.phone")} />
          </Grid>
        </Grid>

        <Typography
          style={{ margin: "2rem 0" }}
          alignSelf="self-start"
          fontWeight={600}
        >
          Endereço
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid xs={12} item>
            <TextField label="CEP" {...register("user.address.postal_code")} />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Rua"
              {...register("user.address.address_line_1")}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Número" {...register("user.address.number")} />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Complemento"
              {...register("user.address.address_line_2")}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Bairro"
              {...register("user.address.addressNeighborhood")}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Cidade" {...register("user.address.city")} />
          </Grid>
          <Grid xs={12} item>
            <TextField label="Estado" {...register("user.address.state")} />
          </Grid>
          <Grid xs={12} item>
            <TextField label="País" {...register("user.address.country")} />
          </Grid>
          <Grid xs={12} item>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  {...register("user.sameBillingAddress")}
                />
              }
              label="Mesmo endereço de entrega"
            />
          </Grid>
        </Grid>

        {!sameBillingAddress && (
          <>
            <Typography
              style={{ margin: "2rem 0" }}
              alignSelf="self-start"
              fontWeight={600}
            >
              Endereço de entrega
            </Typography>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid xs={12} item>
                <TextField
                  label="CEP"
                  {...register("user.billingAddress.postal_code")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Rua"
                  {...register("user.billingAddress.address_line_1")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Número"
                  {...register("user.billingAddress.number")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Complemento"
                  {...register("user.billingAddress.address_line_2")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Bairro"
                  {...register("user.billingAddress.addressNeighborhood")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Cidade"
                  {...register("user.billingAddress.city")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Estado"
                  {...register("user.billingAddress.state")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="País"
                  {...register("user.billingAddress.country")}
                />
              </Grid>
            </Grid>
          </>
        )}
        <Box display="flex" width="100%" justifyContent="space-between">
          <Button
            style={{ marginTop: "2rem" }}
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              router.push("cart");
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
        </Box>
      </form>
      <Backdrop
        sx={{
          color: (theme) => theme.palette.common.white,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ModalAlert
        open={open}
        setOpen={setOpen}
        message={
          (error as any)?.response?.data?.message ||
          "Não foi possível criar a ordem"
        }
        severity="error"
      />
    </Box>
  );
};

export default withHeaderSpacing(Checkout);
