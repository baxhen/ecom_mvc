import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, useWatch } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button, FormControlLabel, Switch, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import { useAppDispatch } from "../../store";
import PageTitle from "../../components/page-title";

const Checkout: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { register, control, handleSubmit } = useForm();

  const sameBillingAddress = useWatch({
    control,
    name: "user.sameBillingAddress",
    defaultValue: true,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Checkout" />

      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <Typography
          style={{ margin: "2rem 0" }}
          alignSelf="self-start"
          fontWeight={600}
        >
          Dados Pessoais
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          component="form"
        >
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
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          component="form"
        >
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
    </Box>
  );
};

export default withHeaderSpacing(Checkout);
