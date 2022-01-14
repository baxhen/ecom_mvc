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
import SelectInput from "../../../components/inputs/select-input";

interface Props {}

const Product: NextPage<Props> = () => {
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

  const variations = watch("variations");

  const [vars, setVars] = React.useState([]);

  const onSubmit = (data: any) => {
    Object.entries(data).forEach(([key, value]) => {
      if (!value) {
        delete data[key];
      }
    });
    console.log({ data });
    console.log({ data: JSON.stringify(data) });
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
          <TextField
            label="Descrição"
            multiline
            rows={4}
            {...register("description")}
          />
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
                    cor: "",
                    tamanho: "",
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
                {/* <Grid item>
                  <Controller
                    render={({ field }) => (
                      <TextField {...field} label={"Tamanho"} />
                    )}
                    name={`combinations.${index}.tamanho`}
                    control={control}
                  />
                </Grid>
                <Grid item>
                  <Controller
                    render={({ field }) => (
                      <TextField {...field} label={"Cor"} />
                    )}
                    name={`combinations.${index}.cor`}
                    control={control}
                  />
                </Grid> */}
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
    </Box>
  );
};

const _Product: NextPage<Props> = withHeaderSpacing(Product);

export default _Product;
