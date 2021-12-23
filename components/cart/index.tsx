import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popover from "@mui/material/Popover";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";
import CartSummary from "./cart-summary";
import CartItems from "./cart-items";
import { cartProductCountSelector, useAppSelector } from "../../store";

interface Props extends WithThemeProps<Theme> {}

const Cart: React.FC<Props> = ({ theme }) => {
  const { cls_cart, cls_cart__popover } = useStyles();

  /** Selectors */

  const productsCount = useAppSelector(cartProductCountSelector);

  /** */

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const containerRef = React.useRef();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "cart-popover" : undefined;

  return (
    <Box ref={containerRef} p="2px">
      <IconButton className={cls_cart} onClick={handleClick}>
        <Badge showZero badgeContent={productsCount} color="primary">
          <ShoppingCartIcon style={{ color: theme.palette.common.white }} />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={containerRef.current}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 65, left: 1400 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={cls_cart__popover}>
          <CartItems />
          <CartSummary />
        </div>
      </Popover>
    </Box>
  );
};

export default withTheme<Theme, typeof Cart>(Cart);
