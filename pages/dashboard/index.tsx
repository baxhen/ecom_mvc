import React from "react";
import type { NextPage } from "next";
import { compose } from "redux";

import Box from "@mui/material/Box";

import withMenuSpacing from "../../hoc/with-menu-spacing";
import withAuth from "../../hoc/with-auth";

const Dashboard: NextPage = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      Nosso Time Ninja está desenvolvendo essa tela
    </Box>
  );
};

export default compose(withMenuSpacing, withAuth)(Dashboard);
