import React from "react";
import { useRouter } from "next/router";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";

import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import useStyles from "./styles";
import Cart from "../cart";

interface Props extends WithThemeProps<Theme> {}

const Header: React.FC<Props> = () => {
  const router = useRouter();
  const { keycloak } = useKeycloak<KeycloakInstance>();
  const { cls_header, cls_header__logo } = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={cls_header}>
          <Typography
            className={cls_header__logo}
            variant="h5"
            onClick={() => router.push("/")}
          >
            Brasil Shop
          </Typography>
          <Typography
            style={{ marginLeft: "auto", cursor: "pointer" }}
            variant="h6"
            onClick={() =>
              keycloak?.login({
                redirectUri: `${window.location.origin}/dashboard`,
              })
            }
          >
            Login
          </Typography>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withTheme<Theme, typeof Header>(Header);
