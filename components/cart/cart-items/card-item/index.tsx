import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Popover from "@mui/material/Popover";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Button, Theme } from "@mui/material";

import useStyles from "./styles";
import { moneyParser } from "../../../../utils";

interface Props extends WithThemeProps<Theme> {
  name: string;
  quantity: number;
  price: number;
  img?: string;
}

const CartItem: React.FC<Props> = ({ theme, name, quantity, price, img }) => {
  const { cls_cart__item, cls_cart__item__content } = useStyles();

  return (
    <div className={cls_cart__item}>
      <img height="100%" src={img} alt="item-carrinho" />
      <div className={cls_cart__item__content}>
        <Box display="flex">
          <Typography sx={{ mt: "5px" }} fontWeight={600}>
            {name}
          </Typography>
          <IconButton sx={{ marginLeft: "auto" }}>
            <HighlightOffIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography>
          {quantity} x{" "}
          <span style={{ fontWeight: 600, color: theme.palette.primary.main }}>
            {moneyParser.format(price)}
          </span>
        </Typography>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  name: "",
  quantity: 0,
  price: 0,
  img: "https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2017/11/product-23-600x600.jpg",
};

export default withTheme<Theme, typeof CartItem>(CartItem);
