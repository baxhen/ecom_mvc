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
import { lighten } from "@mui/material";

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
      <Box
        width="90%"
        display="flex"
        height="5rem"
        justifyContent="center"
        alignItems="center"
        style={{
          background: lighten(theme.palette.primary.dark, 0.7),
        }}
      >
        <Typography variant="h4">Carrinho</Typography>
      </Box>
      <ProductsTable />
      <CartTotal />
    </Box>
  );
};

export default withHeaderSpacing(Cart);
