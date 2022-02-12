import React from "react";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";
import CartItem from "./card-item";
import { cartProductsSelector, useAppSelector } from "../../../store";

interface Props extends WithThemeProps<Theme> {}

const CartItems: React.FC<Props> = ({}) => {
  const { cls_cart__items } = useStyles();

  /** Selectors */

  const products = useAppSelector(cartProductsSelector);

  /** */

  return (
    <div className={cls_cart__items}>
      {products.map((product) => (
        <CartItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default withTheme<Theme, typeof CartItems>(CartItems);
