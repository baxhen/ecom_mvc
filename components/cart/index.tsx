import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popover from "@mui/material/Popover";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";

interface Props extends WithThemeProps<Theme> {}

const Cart: React.FC<Props> = ({ theme }) => {
  const { cls_cart } = useStyles();

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
        <Badge badgeContent={7} color="primary">
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
        anchorPosition={{ top: 65, left: 1425 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box width="300px">
          <Typography sx={{ p: 2 }}> Item 1 </Typography>
          <Typography sx={{ p: 2 }}> Item 2 </Typography>
          <Typography sx={{ p: 2 }}> Item 3 </Typography>
          <Typography sx={{ p: 2 }}> Item 4 </Typography>
          <Typography sx={{ p: 2 }}> Item 5 </Typography>
          <Typography sx={{ p: 2 }}> Item 6 </Typography>
          <Typography sx={{ p: 2 }}> Item 7 </Typography>
        </Box>
      </Popover>
    </Box>
  );
};

export default withTheme<Theme, typeof Cart>(Cart);
