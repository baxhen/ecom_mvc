import React from "react";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme, useMediaQuery } from "@mui/material";
import { ActionCreators } from "redux-undo";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import useStyles from "./styles";
import IntInputWithControls from "../../int-input-with-controls";
import { moneyParser } from "../../../utils";
import {
  deleteCartProduct,
  editCartProductQuantity,
  useAppDispatch,
} from "../../../store";
import { ICartProduct } from "../../../types";

interface Props extends WithThemeProps<Theme>, ICartProduct {}

const ProductTableItem: React.FC<Props> = ({ theme, ...product }) => {
  const dispatch = useAppDispatch();

  const {
    cls_product_item,
    cls_product_item__section,
    cls_product_item__delete_btn,
    cls_product_item__section_empty,
  } = useStyles();

  const { name, defaultImage, description, sku, quantity, id } = product;

  const up768 = useMediaQuery(theme.breakpoints.up(768));

  const setQuantity: any = (newQuantity: number) => {
    if (sku.quantity < newQuantity) return;
    dispatch(editCartProductQuantity({ id, quantity: newQuantity }));
    dispatch(ActionCreators.clearHistory());
  };

  const onRemoveProduct = () => {
    dispatch(deleteCartProduct(id));
  };

  return (
    <div className={cls_product_item}>
      <div className={cls_product_item__section_empty}>
        <IconButton
          className={cls_product_item__delete_btn}
          onClick={onRemoveProduct}
        >
          <ClearIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      {up768 && (
        <div className={cls_product_item__section_empty}>
          <img height="100%" src={defaultImage} alt="item-carrinho" />
        </div>
      )}
      <div className={cls_product_item__section}>
        {!up768 && (
          <Typography variant="h6" fontWeight={600} fontSize="1rem">
            Produto:
          </Typography>
        )}

        <Typography variant="body1" noWrap={!up768}>
          {name}
        </Typography>
      </div>
      <div className={cls_product_item__section}>
        {!up768 && (
          <Typography variant="h6" fontWeight={600} fontSize="1rem">
            Preço:
          </Typography>
        )}

        <Typography variant="body1">
          {moneyParser.format(sku.sellingPrice)}
        </Typography>
      </div>
      <div className={cls_product_item__section}>
        {!up768 && (
          <Typography variant="h6" fontWeight={600} fontSize="1rem">
            Quantidade:
          </Typography>
        )}

        <IntInputWithControls
          quantity={quantity}
          setQuantity={setQuantity}
          width="5c"
          maxHeight="2.5rem"
        />
      </div>
      <div className={cls_product_item__section}>
        {!up768 && (
          <Typography variant="h6" fontWeight={600} fontSize="1rem">
            Subtotal:
          </Typography>
        )}

        <Typography variant="body1">
          {moneyParser.format(quantity * sku.sellingPrice)}
        </Typography>
      </div>
    </div>
  );
};

ProductTableItem.defaultProps = {};

export default withTheme<Theme, typeof ProductTableItem>(ProductTableItem);
