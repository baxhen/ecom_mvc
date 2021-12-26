import React from "react";
import type { NextPage } from "next";
import { ActionCreators } from "redux-undo";

import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import ProductsTable from "../../components/products-table";
import { useAppDispatch } from "../../store";

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
      <ProductsTable />
    </Box>
  );
};

export default withHeaderSpacing(Cart);
