import React from "react";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { SelectChangeEvent, Theme, useMediaQuery } from "@mui/material";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import useStyles from "./styles";
import IntInputWithControls from "../inputs/int-input-with-controls";
import SelectInput from "../inputs/select-input";
import { moneyParser } from "../../utils";
import { addCartProduct, useAppDispatch } from "../../store";
import ModalAddProduct from "../modal/modal-add-product";
import { IOffer, IProduct } from "../../types";
import { config } from "process";

interface Props extends WithThemeProps<Theme>, IProduct {
  company: IOffer["company"];
}

interface IOptionConfig {
  id: number;
  name: string;
  value: number | "";
  options: { value: number; label: string }[];
  onChange?:
    | ((event: SelectChangeEvent<number>, child: React.ReactNode) => void)
    | undefined;
}

const Product: React.FC<Props> = ({ theme, ...product }) => {
  const dispatch = useAppDispatch();

  const {
    cls_product,
    cls_product__img,
    cls_product__content,
    cls_product__content__name,
    cls_product__content__description,
    cls_product__content__price,
  } = useStyles();

  const {
    name,
    defaultImage,
    description,
    skus,
    company,
    attributes,
    listPrice,
  } = product;

  const downXXS = useMediaQuery(theme.breakpoints.down(500));

  const [quantity, setQuantity] = React.useState(1);
  const [sku, setSku] = React.useState<IProduct["skus"][0]>();
  const [optionsConfig, setOptionsConfig] = React.useState<IOptionConfig[]>([]);

  const [open, setOpen] = React.useState(false);

  const onBuyClick = () => {
    dispatch(addCartProduct({ ...product, quantity }));
    setOpen(true);
    setQuantity(1);
  };

  const onOptionChange =
    (id: number) =>
    ({ target: { value } }: SelectChangeEvent<number>) => {
      const sku = skus.find((sku) => {
        return sku.attributeDetails.some((att) => att.id === +value);
      });

      if (sku) {
        setSku(sku);

        const attributesRelatedSkuWithoutCurrent = sku.attributeDetails.filter(
          (att) => att.attribute.id !== id
        );

        console.log({ sku, attributesRelatedSkuWithoutCurrent });
        setOptionsConfig((previous): IOptionConfig[] => {
          /** update value */

          let next = previous.map((prev) => {
            if (prev.id === id) {
              return { ...prev, value: +value };
            }

            return prev;
          });

          /** update siblings options */

          attributesRelatedSkuWithoutCurrent.forEach((att) => {
            next = next.map((prev) => {
              if (prev.id === att.attribute.id) {
                return {
                  ...prev,
                  options: [],
                };
              }

              return prev;
            });

            next = next.map((prev) => {
              if (prev.id === att.attribute.id) {
                return {
                  ...prev,
                  value: att.id,
                  options: [
                    ...prev.options,
                    { value: att.id, label: att.valueString },
                  ],
                };
              }

              return prev;
            });
          });

          return next;
        });
      }
    };

  React.useEffect(() => {
    const config: IOptionConfig[] = [];
    attributes.forEach(({ name, id }) => {
      config.push({
        name,
        id,
        value: "",
        options: [],
      });
    });

    skus.forEach(({ attributeDetails }) => {
      attributeDetails.forEach(({ id, valueString, attribute }) => {
        const index = config.findIndex((op) => op.id === attribute.id);

        if (index !== -1) {
          console.log(config[index].options);
          const alreadyAdded = config[index].options.find(
            ({ label }) => label === valueString
          );

          if (alreadyAdded) return;

          config[index].options.push({
            value: id,
            label: valueString,
          });
        }
      });
    });

    setOptionsConfig(config);
  }, [skus]);

  return (
    <Card className={cls_product}>
      <CardMedia
        component="img"
        className={cls_product__img}
        image={defaultImage}
      />
      <CardContent className={cls_product__content}>
        <Typography variant="h5" className={cls_product__content__name}>
          {name}
        </Typography>
        <Typography variant="subtitle1" className={cls_product__content__price}>
          {moneyParser.format(sku?.listedPrice || listPrice)}
        </Typography>
        <Typography
          variant="subtitle2"
          className={cls_product__content__description}
        >
          {description}
        </Typography>

        <Box
          display="flex"
          flexDirection={downXXS ? "column" : "row"}
          gap="1rem"
          mb="1rem"
          width={downXXS ? "100%" : "15rem"}
          height="auto"
        >
          {optionsConfig.map(({ name, value, id, options }) => {
            return (
              <SelectInput
                key={id}
                style={{ fontSize: "15px", borderRadius: "0" }}
                value={value}
                onChange={onOptionChange(id)}
                label={name}
                options={options}
              />
            );
          })}
        </Box>
        <Box
          display="flex"
          gap="1rem"
          height="auto"
          mb="1rem"
          width={downXXS ? "100%" : "15rem"}
          flexDirection={downXXS ? "column" : "row"}
        >
          <IntInputWithControls
            quantity={quantity}
            setQuantity={setQuantity}
            height="2.5rem"
          />
          <Button
            variant="contained"
            style={{ borderRadius: "0", height: "2.5rem", width: "100%" }}
            onClick={onBuyClick}
          >
            Comprar
          </Button>
        </Box>
        <Box display="flex" gap="0.3rem">
          <Typography fontWeight={600}>SKU:</Typography>
          <Typography>{sku?.skuCode || skus[0].skuCode}</Typography>
        </Box>
        <Box display="flex" gap="0.3rem">
          <Typography fontWeight={600}>Loja:</Typography>
          <Typography>{company.name}</Typography>
        </Box>
      </CardContent>
      <ModalAddProduct
        open={open}
        setOpen={setOpen}
        productName={product.name}
      />
    </Card>
  );
};

Product.defaultProps = {};

export default withTheme<Theme, typeof Product>(Product);
