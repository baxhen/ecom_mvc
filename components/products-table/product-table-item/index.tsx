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

interface Props extends WithThemeProps<Theme>, ICartProduct {}

const ProductTableItem: React.FC<Props> = ({ theme, ...product }) => {
  const dispatch = useAppDispatch();

  const {
    cls_product_item,
    cls_product_item__section,
    cls_product_item__delete_btn,
  } = useStyles();

  const { name, img, description, sku, store, price, quantity, id } = product;

  // const downXXS = useMediaQuery(theme.breakpoints.down(500));
  const setQuantity: any = (newQuantity: number) => {
    dispatch(editCartProductQuantity({ id, quantity: newQuantity }));
    dispatch(ActionCreators.clearHistory());
  };

  const onRemoveProduct = () => {
    dispatch(deleteCartProduct(id));
  };

  return (
    <div className={cls_product_item}>
      <div className={cls_product_item__section}>
        <IconButton
          className={cls_product_item__delete_btn}
          onClick={onRemoveProduct}
        >
          <ClearIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div className={cls_product_item__section}>
        <Typography variant="h6" fontWeight={600} fontSize="1rem">
          Produto:
        </Typography>

        <Typography variant="body1">{name}</Typography>
      </div>
      <div className={cls_product_item__section}>
        <Typography variant="h6" fontWeight={600} fontSize="1rem">
          Preço:
        </Typography>

        <Typography variant="body1">{moneyParser.format(price)}</Typography>
      </div>
      <div className={cls_product_item__section}>
        <Typography variant="h6" fontWeight={600} fontSize="1rem">
          Quantidade:
        </Typography>

        <IntInputWithControls quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className={cls_product_item__section}>
        <Typography variant="h6" fontWeight={600} fontSize="1rem">
          Subtotal:
        </Typography>

        <Typography variant="body1">
          {moneyParser.format(quantity * price)}
        </Typography>
      </div>
    </div>
  );
};

ProductTableItem.defaultProps = {
  img: "https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2017/11/product-23-600x600.jpg",
  sku: "654111995-1-1-2",
  store: "Renner",
  description:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  name: "Bolsa",
  price: 100,
  quantity: 1,
};

export default withTheme<Theme, typeof ProductTableItem>(ProductTableItem);
