import React from "react";
import type { NextPage } from "next";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import Product from "../../components/product";

const Offer: NextPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="1rem"
      pt="1rem"
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Box>
  );
};

export default withHeaderSpacing(Offer);