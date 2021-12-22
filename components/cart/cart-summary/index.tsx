import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popover from "@mui/material/Popover";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Button, Theme } from "@mui/material";

import useStyles from "./styles";

interface Props extends WithThemeProps<Theme> {}

const CartSummary: React.FC<Props> = ({ theme }) => {
  const { cls_cart__summary } = useStyles();

  return (
    <div className={cls_cart__summary}>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600}>Subtotal:</Typography>
        <Typography>R$ 500,00</Typography>
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
