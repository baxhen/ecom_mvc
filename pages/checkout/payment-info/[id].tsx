import React, { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CircularProgress } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../store";
import withHeaderSpacing from "../../../hoc/with-header-spacing";
import PageTitle from "../../../components/page-title";
import { IInstallmentsAPI, IOrder, IQuestionAPI } from "../../../types";
import { client } from "../../../api";
import { useRouter } from "next/router";
import { AntiFraudParams, useCheckAntiFraudAnswers } from "../../../hooks";
import { orderIdSelector } from "../../../store/order";

interface Props {
  amount?: number;
  installments?: IInstallmentsAPI["data"]["creditcard"]["installments"];
}

const PaymentInfo: NextPage<Props> = ({ amount, installments }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const orderId = useAppSelector(orderIdSelector);

  const { mutateAsync: checkAnswers, isLoading } = useCheckAntiFraudAnswers();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    // const payload: AntiFraudParams = {
    //   answers: {
    //     questions: questions.map(({ id }) => ({ id, answer: +data[id] })),
    //   },
    //   orderId,
    // };
  };

  React.useEffect(() => {
    console.log({ amount, installments });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Pagamento" />
      {/* <Typography alignSelf="self-start" fontWeight={600}>
        Questionário antifraude
      </Typography>
      <Grid
        container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {questions.map((question) => {
          return (
            <Grid xs={12} item key={question.id}>
              <FormControl component="fieldset">
                <FormLabel component="legend">{question.question}</FormLabel>
                <RadioGroup {...register("" + question.id)}>
                  {question.answers.map((answer) => {
                    return (
                      <FormControlLabel
                        value={answer.id}
                        control={<Radio />}
                        label={answer.answer}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </Grid>
          );
        })}
        <Grid item display="flex" width="100%" justifyContent="space-between">
          <Button
            style={{ marginTop: "2rem" }}
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              router.push("/checkout");
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
      </Grid> */}
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

    const amount = data.data.orders.totalAmount;

    const response = await client.get<IInstallmentsAPI>(
      `https://payment.carrin.io/payment/api/v1/checkout/simulate`,
      { params: { amount } }
    );

    return { amount, installments: response.data.data.creditcard.installments };
  } catch (error) {
    console.error(error);
  }

  return { amount: 0, installments: [] };
};

export default _PaymentInfo;
