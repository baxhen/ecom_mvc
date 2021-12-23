import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Button, Theme } from "@mui/material";

import useStyles from "./styles";
import { cartSubtotalSelector, useAppSelector } from "../../../store";
import { moneyParser } from "../../../utils";

interface Props extends WithThemeProps<Theme> {}

const CartSummary: React.FC<Props> = ({ theme }) => {
  const { cls_cart__summary } = useStyles();

  /** Selectors */

  const subtotal = useAppSelector(cartSubtotalSelector);

  /** */

  return (
    <div className={cls_cart__summary}>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600}>Subtotal:</Typography>
        <Typography>{moneyParser.format(subtotal)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" style={{ borderRadius: "0" }}>
          Carrinho
        </Button>
        <Button variant="contained" style={{ borderRadius: "0" }}>
          Checkout
        </Button>
      </Box>
    </div>
  );
};

export default withTheme<Theme, typeof CartSummary>(CartSummary);
