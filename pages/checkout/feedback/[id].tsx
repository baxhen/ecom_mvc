import React, { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import { useForm } from "react-hook-form";
import Cards, { Focused } from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";
import { DateTime } from "luxon";

import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CircularProgress, Typography } from "@mui/material";

import {
  cartProductsSelector,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import withHeaderSpacing from "../../../hoc/with-header-spacing";
import PageTitle from "../../../components/page-title";
import { IInstallmentsAPI, IOrder } from "../../../types";
import { client } from "../../../api";
import { useRouter } from "next/router";
import { IPaymentMethod, useSavePaymentMethod } from "../../../hooks";
import { orderIdSelector } from "../../../store/order";
import SelectInput from "../../../components/inputs/select-input";
import { moneyParser } from "../../../utils";
import theme from "../../../styles/theme";
import { resetCart } from "../../../store/cart/actions/reset-cart";
import { resetOrder } from "../../../store/order/actions/reset-order";
import { offersSelector } from "../../../store/offer";

interface Props {
  order?: IOrder["data"]["orders"];
}

const Confirmation: NextPage<Props> = ({ order }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const products = useAppSelector(cartProductsSelector);
  const offers = useAppSelector(offersSelector);

  const date = DateTime.fromISO(order?.updatedAt || "")
    .setLocale("pt-br")
    .toFormat("DDD");

  React.useEffect(() => {
    if (!products.length) {
      router.push(`/offer/${offers[0].id}`);
    }

    return () => {
      dispatch(resetCart());
      dispatch(resetOrder());
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <Box
        border={`2px dashed ${theme.palette.primary.main}`}
        p="0.5rem"
        width="100%"
      >
        <Typography
          sx={{ color: (theme) => theme.palette.primary.main }}
          textAlign="center"
          fontWeight={600}
          variant="h6"
        >
          Obrigado. Recebemos o seu pedido
        </Typography>
      </Box>
      <Box
        border={`1px solid ${theme.palette.primary.main}`}
        p="0.5rem"
        width="100%"
      >
        <Typography
          sx={{ color: (theme) => theme.palette.primary.main }}
          textAlign="center"
          fontWeight={600}
          variant="body1"
        >
          Acompanhe o seu pedido com o código enviado no seu email
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="2rem" width="100%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="caption">Número da ordem:</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            {order?.transactionId}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="caption">Data:</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            {date}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="caption">Total:</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            {moneyParser.format(order?.totalAmount || 0)}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="caption">Método de pagamento:</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Cartão de Crédito
          </Typography>
        </Box>
      </Box>

      <Box width="100%" display="flex">
        <Typography
          fontWeight={600}
          variant="h6"
          style={{ textTransform: "uppercase", marginRight: "auto" }}
        >
          Detalhes do pedido
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="2rem" width="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="h6" fontWeight={600}>
            Produto
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Total
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          {products.map((product) => {
            return (
              <Box
                key={product.id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography style={{ width: "50%" }} variant="body1">
                  {product.name} x {product.quantity}
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "auto",
                  }}
                  variant="body1"
                >
                  {moneyParser.format(product.salePrice * product.quantity)}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="body1" fontWeight={600}>
            Subtotal
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
            fontWeight={600}
          >
            {moneyParser.format(order?.subtotal || 0)}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="body1" fontWeight={600}>
            Frete
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
            fontWeight={600}
          >
            {moneyParser.format(order?.totalPriceWeight || 0)}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="body1" fontWeight={600}>
            Meio de pagamento
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
            fontWeight={600}
          >
            Cartão de crédito
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          paddingBottom="1rem"
          borderBottom={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography variant="h6" fontWeight={600}>
            Total
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
            fontWeight={600}
          >
            {moneyParser.format(order?.totalAmount || 0)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const _Confirmation: NextPage<Props> = withHeaderSpacing(Confirmation);

_Confirmation.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;

  try {
    const { data } = await client.get<IOrder>(`/orders/detail/${id}`);

    const order = data.data.orders;

    return { order };
  } catch (error) {
    console.error(error);
  }

  return { order: undefined };
};

export default _Confirmation;
