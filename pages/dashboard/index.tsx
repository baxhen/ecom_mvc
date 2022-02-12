import React from "react";
import type { NextPage } from "next";
import { compose } from "redux";

import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import withAuth from "../../hoc/with-auth";

const Dashboard: NextPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        pt="1rem"
      >
        Acompanhamento de pedido
      </Box>
    </Box>
  );
};

export default compose(withHeaderSpacing, withAuth)(Dashboard);
