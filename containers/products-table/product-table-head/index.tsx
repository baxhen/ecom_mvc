import React from "react";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import Typography from "@mui/material/Typography";

import useStyles from "./styles";
import { useAppDispatch } from "../../../store";

interface Props extends WithThemeProps<Theme> {}

const ProductTableHead: React.FC<Props> = ({ theme, ...product }) => {
  const dispatch = useAppDispatch();

  const {
    cls_product_head,
    cls_product_head__section,
    cls_product_head__section_empty,
  } = useStyles();

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
