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
import Link from "@mui/material/Link";
import ClearIcon from "@mui/icons-material/Clear";

import useStyles from "./styles";
import IntInputWithControls from "../inputs/int-input-with-controls";
import SelectInput from "../inputs/select-input";
import { moneyParser } from "../../utils";
import {
  addCartProduct,
  cartCanUndoSelector,
  cartProductsSelector,
  ICartProduct,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import ProductTableItem from "./product-table-item";

interface Props extends WithThemeProps<Theme> {}

const ProductsTable: React.FC<Props> = ({ theme }) => {
  const dispatch = useAppDispatch();

  const { cls_products } = useStyles();

  /** Selectors */
  const canUndo = useAppSelector(cartCanUndoSelector);
  const products = useAppSelector(cartProductsSelector);
  /** */

  // const { name, img, description, sku, store, price } = product;

  const downXXS = useMediaQuery(theme.breakpoints.up(768));

  const onUndoClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(ActionCreators.undo());
  };

  return (
    <div className={cls_products}>
      {canUndo && (
        <Box>
          <Typography variant="body2" display="inline">
            Produto deletado{" "}
          </Typography>
          <Box onClick={onUndoClick} display="inline">
            <Link href="#" variant="body2">
              desfazer
            </Link>
          </Box>
        </Box>
      )}

      {products.map((product) => {
        return <ProductTableItem {...product} key={product.id} />;
      })}
    </div>
  );
};

ProductsTable.defaultProps = {};

export default withTheme<Theme, typeof ProductsTable>(ProductsTable);
