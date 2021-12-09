import React from "react";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme, useMediaQuery } from "@mui/material";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import useStyles from "./styles";
import TextInput from "../inputs/text-input";
import IntInputWithControls from "../inputs/int-input-with-controls";
import SelectInput from "../inputs/select-input";

interface Props extends WithThemeProps<Theme> {}

const Product: React.FC<Props> = ({ theme }) => {
  const {
    cls_product,
    cls_product__img,
    cls_product__content,
    cls_product__content__name,
    cls_product__content__description,
  } = useStyles();

  const downXXS = useMediaQuery(theme.breakpoints.down(500));

  const [quantity, setQuantity] = React.useState(0);
  const [size, setSize] = React.useState<string | number>("");
  const [color, setColor] = React.useState<string | number>("");

  return (
    <Card className={cls_product}>
      <CardMedia
        component="img"
        className={cls_product__img}
        image="https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2017/11/product-23-600x600.jpg"
      />
      <CardContent className={cls_product__content}>
        <Typography variant="h3" className={cls_product__content__name}>
          Bolsa
        </Typography>
        <Typography
          variant="subtitle2"
          className={cls_product__content__description}
        >
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </Typography>

        <Box
          display="flex"
          flexDirection={downXXS ? "column" : "row"}
          gap="1rem"
          mb="1rem"
          width={downXXS ? "100%" : "15rem"}
          height="auto"
        >
          <SelectInput
            style={{ fontSize: "15px", borderRadius: "0" }}
            value={size}
            onChange={(e: any) => setSize(e.target.value)}
            label="Tamanho"
            options={[
              { value: 1, label: "XS" },
              { value: 2, label: "S" },
              { value: 3, label: "XXL" },
            ]}
          />
          <SelectInput
            style={{ fontSize: "15px", borderRadius: "0" }}
            value={color}
            onChange={(e: any) => setColor(e.target.value)}
            label="Cor"
            options={[
              { value: 1, label: "Verde" },
              { value: 2, label: "Vermelho" },
              { value: 3, label: "Azul" },
              { value: 4, label: "Marrom" },
            ]}
          />
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
          >
            Comprar
          </Button>
        </Box>
        <Box display="flex" gap="0.3rem">
          <Typography fontWeight={600}>SKU:</Typography>
          <Typography>654111995-1-1-2</Typography>
        </Box>
        <Box display="flex" gap="0.3rem">
          <Typography fontWeight={600}>Loja:</Typography>
          <Typography>Renner</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default withTheme<Theme, typeof Product>(Product);
