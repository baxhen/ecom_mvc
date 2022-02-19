import React from "react";
import type { NextPage } from "next";
import { ActionCreators } from "redux-undo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import PageTitle from "./../../../components/page-title";
import withHeaderSpacing from "../../../hoc/with-header-spacing";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import SelectInput from "../../../components/select-input";
import { useCreateProduct } from "../../../hooks";
import { Backdrop, CircularProgress } from "@mui/material";
import { compose } from "redux";
import withMenuSpacing from "../../../hoc/with-menu-spacing";
import withAuth from "../../../hoc/with-auth";

interface Props {}

const _Product: NextPage<Props> = () => {
  const { register, handleSubmit, control, watch } = useForm();
  const {
    fields: fieldsVariations,
    remove: removeVariation,
    append: appendVariation,
  } = useFieldArray({
    name: "variations",
    control,
  });
  const { fields, remove, append } = useFieldArray({
    name: "combinations",
    control,
  });

  const { mutateAsync: createProduct, isLoading } = useCreateProduct();

  const variations = watch("variations");

  const [vars, setVars] = React.useState([]);

  const onSubmit = async (data: any) => {
    const numberFields = ["weight", "length", "width", "height"];

    Object.entries(data).forEach(([key, value]) => {
      if (!value) {
        delete data[key];
      }
    });

    data.combinations = data.combinations.map((c: any) => ({
      ...c,
      quantity: Number(c.quantity.replaceAll(",", ".")),
      price: Number(c.price.replaceAll(",", ".")),
    }));

    numberFields.forEach((key) => {
      if (data[key]) {
        data[key] = Number(data[key]);
      }
    });

    data.companyId = 1;
    data.price = 0;

    const resp = await createProduct(data);

    console.log({ resp });
  };

  const onBlur = () => {
    setVars(variations);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
      height="100vh"
      sx={{ overflow: "auto" }}
    >
      <PageTitle title="Adicionar produto" />

      <Grid
        container
        spacing={3}
        item
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid xs={12} item>
          <TextField label="Nome do produto" {...register("name")} />
        </Grid>
        <Grid xs={12} item>
          <TextField label="Url foto do produto" {...register("img")} />
        </Grid>
        <Grid xs={12} item>
          <TextField
            label="Descrição"
            multiline
            rows={4}
            {...register("description")}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField label="Peso (gramas)" {...register("weight")} />
        </Grid>
        <Grid xs={12} item>
          <TextField label="Comprimento (cm)" {...register("length")} />
        </Grid>
        <Grid xs={12} item>
          <TextField label="Largura (cm)" {...register("width")} />
        </Grid>
        <Grid xs={12} item>
          <TextField label="Altura (cm)" {...register("height")} />
        </Grid>

        <Grid container flexDirection="column" spacing={3} xs={12} item>
          <Grid item>
            <Box display="flex" alignItems="center" gap="1rem">
              <Typography>Variações</Typography>
              <Button
                onClick={() => appendVariation({ variation: "Nova Variação" })}
              >
                Adicionar
              </Button>
            </Box>
          </Grid>
          {fieldsVariations.map((item, index) => (
            <Grid item key={item.id}>
              <Box display="flex">
                <Controller
                  render={({ field }) => (
                    <TextField {...field} onBlur={onBlur} />
                  )}
                  name={`variations.${index}.variation`}
                  control={control}
                />
                <Button type="button" onClick={() => removeVariation(index)}>
                  Delete
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container flexDirection="column" spacing={3} xs={12} item>
          <Grid item>
            <Box display="flex" alignItems="center" gap="1rem">
              <Typography>Combinações</Typography>
              <Button
                onClick={() =>
                  append({
                    sku: "",
                    quantity: "",
                    price: "",
                  })
                }
              >
                Adicionar
              </Button>
            </Box>
          </Grid>
          {fields.map((item, index) => (
            <Grid container item spacing={3} key={item.id}>
              <Grid
                container
                spacing={3}
                item
                display="flex"
                alignItems="center"
              >
                <Grid item>
                  <Controller
                    render={({ field }) => (
                      <TextField {...field} label="Código SKU" />
                    )}
                    name={`combinations.${index}.sku`}
                    control={control}
                  />
                </Grid>

                {vars.map((variation: any, i: number) => {
                  return (
                    <Grid item key={variation.id}>
                      <Controller
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={(variation as any)?.variation}
                          />
                        )}
                        name={`combinations.${index}.${(
                          variation as any
                        )?.variation.toLowerCase()}`}
                        control={control}
                      />
                    </Grid>
                  );
                })}

                <Grid item>
                  <Controller
                    render={({ field }) => (
                      <TextField {...field} label="Quantidade" />
                    )}
                    name={`combinations.${index}.quantity`}
                    control={control}
                  />
                </Grid>

                <Grid item>
                  <Controller
                    render={({ field }) => (
                      <TextField {...field} label="Preço" />
                    )}
                    name={`combinations.${index}.price`}
                    control={control}
                  />
                </Grid>
                <Grid item>
                  <Button type="button" onClick={() => remove(index)}>
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid item display="flex" width="100%" justifyContent="space-between">
          <Button
            style={{ marginTop: "2rem" }}
            // endIcon={<ArrowForwardIcon />}
            variant="contained"
            type="submit"
          >
            Continuar
          </Button>
        </Grid>
      </Grid>
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

const Product: NextPage<Props> = compose(
  withMenuSpacing,
  withAuth
)(_Product) as any;

export default Product;
