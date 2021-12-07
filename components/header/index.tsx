import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useStyles from "./styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

interface Props extends WithThemeProps<Theme> {}

const Header: React.FC<Props> = ({ theme }) => {
  const history = useRouter();

  const { cls_header, cls_header__btn } = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" elevation={0}>
        <Toolbar className={cls_header}>
          <Typography variant="h5">Brasil Shop</Typography>

          <IconButton className={cls_header__btn}>
            <Badge badgeContent={7} color="primary">
              <ShoppingCartIcon style={{ color: theme.palette.common.white }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withTheme<Theme, typeof Header>(Header);
