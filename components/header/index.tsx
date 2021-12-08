import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";

// import { fadeIn } from "../../styles/keyframes";

interface Props extends WithThemeProps<Theme> {}

const Header: React.FC<Props> = ({ theme }) => {
  const { cls_header, cls_header__btn, cls_header__logo } = useStyles();
  // const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" elevation={0}>
        <Toolbar className={cls_header}>
          <Typography
            className={cls_header__logo}
            variant="h5"
            // sx={{ animation: fadeIn, animationDuration: "1s" }}
          >
            Brasil Shop
          </Typography>

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
