import React from "react";
import type { NextPage } from "next";
import { ActionCreators } from "redux-undo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import ProductsTable from "../../components/products-table";
import CartTotal from "../../components/cart-total";
import { useAppDispatch } from "../../store";
import theme from "../../styles/theme";
import PageTitle from "../../components/page-title";

const Cart: NextPage = () => {
  const dispatch = useAppDispatch();

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
      <CartTotal />
    </Box>
  );
};

export default withHeaderSpacing(Cart);
