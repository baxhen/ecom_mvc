import React from "react";
import type { NextPage } from "next";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import Product from "../../components/product";

const Checkout: NextPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        pt="1rem"
      >
        Checkout
      </Box>
    </Box>
  );
};

export default withHeaderSpacing(Checkout);
