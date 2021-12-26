import React from "react";
import type { NextPage } from "next";

import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import ProductsTable from "../../components/products-table";
import CartTotal from "../../components/cart-total";
import { useAppDispatch } from "../../store";
import PageTitle from "../../components/page-title";

const Checkout: NextPage = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Checkout" />
    </Box>
  );
};

export default withHeaderSpacing(Checkout);
