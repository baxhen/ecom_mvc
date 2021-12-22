import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Popover from "@mui/material/Popover";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Button, Theme } from "@mui/material";

import useStyles from "./styles";
import CartItem from "./card-item";

interface Props extends WithThemeProps<Theme> {}

const CartItems: React.FC<Props> = ({ theme }) => {
  const { cls_cart__items } = useStyles();

  return (
    <div className={cls_cart__items}>
      <CartItem name="Bolsa" quantity={5} price={208.78} />
      <CartItem name="Bolsa" quantity={5} price={208.78} />
      <CartItem name="Bolsa" quantity={5} price={208.78} />
      <CartItem name="Bolsa" quantity={5} price={208.78} />
    </div>
  );
};

export default withTheme<Theme, typeof CartItems>(CartItems);
