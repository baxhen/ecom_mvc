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

interface Props extends WithThemeProps<Theme> {}

const CartTotal: React.FC<Props> = ({ theme }) => {
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

  /** */

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
          <Typography fontWeight={600}>Total:</Typography>
          <Typography fontWeight={600}>
            {moneyParser.format(subtotal)}
          </Typography>
        </div>
      </div>
      <div className={cls_cart_total__action}>
        <Button
          variant="contained"
          style={{ borderRadius: 0 }}
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

export default withTheme<Theme, typeof CartTotal>(CartTotal);
