import React from "react";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme, useMediaQuery } from "@mui/material";
import { ActionCreators } from "redux-undo";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import useStyles from "./styles";
import IntInputWithControls from "../../inputs/int-input-with-controls";
import SelectInput from "../../inputs/select-input";
import { moneyParser } from "../../../utils";
import {
  addCartProduct,
  deleteCartProduct,
  editCartProductQuantity,
  ICartProduct,
  useAppDispatch,
} from "../../../store";
import ModalAddProduct from "../../modal/modal-add-product";

interface Props extends WithThemeProps<Theme> {}

const ProductTableHead: React.FC<Props> = ({ theme, ...product }) => {
  const dispatch = useAppDispatch();

  const {
    cls_product_head,
    cls_product_head__section,
    cls_product_head__section_empty,
  } = useStyles();

  // const downXXS = useMediaQuery(theme.breakpoints.down(500));

  return (
    <div className={cls_product_head}>
      <div className={cls_product_head__section_empty}></div>
      <div className={cls_product_head__section_empty}></div>
      <div className={cls_product_head__section}>
        <Typography fontWeight={600}>Produto</Typography>
      </div>
      <div className={cls_product_head__section}>
        <Typography fontWeight={600}>Preço</Typography>
      </div>
      <div className={cls_product_head__section}>
        <Typography fontWeight={600}>Quantidade</Typography>
      </div>
      <div className={cls_product_head__section}>
        <Typography fontWeight={600}>Subtotal</Typography>
      </div>
    </div>
  );
};

ProductTableHead.defaultProps = {};

export default withTheme<Theme, typeof ProductTableHead>(ProductTableHead);
