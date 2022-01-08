import React from "react";
import type { NextPage } from "next";
import { ActionCreators } from "redux-undo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import ProductsTable from "../../components/products-table";
import CartTotal from "../../components/cart-total";
import {
  cartHasProductsSelector,
  cartProductsSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import PageTitle from "../../components/page-title";
import { getShippingPrice, useGetShippingPricePerProduct } from "../../hooks";
import { connect } from "react-redux";
import { client } from "../../api";
import { IPaginatedProduct } from "../../types";

export interface Shipping {
  id: number;
  weight: number;
  price: number;
}
interface Props {
  shipping?: Shipping[];
}

const Cart: NextPage<Props> = ({ shipping }) => {
  const dispatch = useAppDispatch();

  const hasProducts = useAppSelector(cartHasProductsSelector);

  React.useEffect(() => {
    dispatch(ActionCreators.clearHistory());
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Carrinho" />

      <ProductsTable />
      {hasProducts && <CartTotal shipping={shipping} />}
    </Box>
  );
};

const _Cart: NextPage<Props> = withHeaderSpacing(Cart);

_Cart.getInitialProps = async (ctx) => {
  try {
    const response = await client.get<IPaginatedProduct>("/products/1", {
      params: { pageNumber: 0, pageSize: 25 },
    });

    const productsIdWithWeight = response.data.data.data.map((p) => ({
      id: p.id,
      weight: p.weight,
    }));

    const shipping = await Promise.all(
      productsIdWithWeight.map(async (p) => {
        const data = await getShippingPrice(p);

        return { ...p, price: data.price };
      })
    );

    return { shipping };
  } catch (error) {
    return { shipping: [] };
  }
};

export default _Cart;
