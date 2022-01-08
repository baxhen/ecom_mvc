import React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Popover from "@mui/material/Popover";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";

import {
  cartProductCountSelector,
  cartProductsSelector,
  cartSubtotalSelector,
  useAppSelector,
} from "../../store";
import { moneyParser } from "../../utils";
import { Shipping } from "../../pages/cart";

interface Props extends WithThemeProps<Theme> {
  shipping?: Shipping[];
}

const CartTotal: React.FC<Props> = ({ theme, shipping }) => {
  const router = useRouter();

  const {
    cls_cart_total,
    cls_cart_total__title,
    cls_cart_total__summary,
    cls_cart_total__summary__item,
    cls_cart_total__action,
  } = useStyles();

  /** Selectors */

  const subtotal = useAppSelector(cartSubtotalSelector);
  const products = useAppSelector(cartProductsSelector);

  /** */

  const shippingPrice = products.reduce((acc, curr) => {
    const productShippingPrice = shipping?.find(({ id }) => id === curr.id);

    if (productShippingPrice) {
      return acc + productShippingPrice?.price * curr.quantity;
    }
    return acc;
  }, 0);

  return (
    <div className={cls_cart_total}>
      <Typography className={cls_cart_total__title} variant="h4">
        Total do Carrinho
      </Typography>

      <div className={cls_cart_total__summary}>
        <div className={cls_cart_total__summary__item}>
          <Typography fontWeight={600}>Subtotal:</Typography>
          <Typography>{moneyParser.format(subtotal)}</Typography>
        </div>
        <div className={cls_cart_total__summary__item}>
          <Typography fontWeight={600}>Frete:</Typography>
          <Typography>{moneyParser.format(shippingPrice)}</Typography>
        </div>
        <div className={cls_cart_total__summary__item}>
          <Typography fontWeight={600}>Total:</Typography>
          <Typography fontWeight={600}>
            {moneyParser.format(subtotal + shippingPrice)}
          </Typography>
        </div>
      </div>
      <div className={cls_cart_total__action}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            router.push("/checkout");
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

CartTotal.defaultProps = { shipping: [] };

export default withTheme<Theme, typeof CartTotal>(CartTotal);
