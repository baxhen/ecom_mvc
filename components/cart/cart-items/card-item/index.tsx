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
import { deleteCartProduct, useAppDispatch } from "../../../../store";
import { IProduct } from "../../../../types";

interface Props extends WithThemeProps<Theme>, IProduct {
  sku: IProduct["skus"][0];
  quantity: number;
}

const CartItem: React.FC<Props> = ({
  theme,
  name,
  quantity,
  defaultImage,
  id,
  sku,
}) => {
  const dispatch = useAppDispatch();

  const { cls_cart__item, cls_cart__item__content } = useStyles();

  const onRemoveClick = () => {
    dispatch(deleteCartProduct(id));
  };

  return (
    <div className={cls_cart__item}>
      <img height="100%" src={defaultImage} alt="item-carrinho" />
      <div className={cls_cart__item__content}>
        <Box display="flex">
          <Typography sx={{ mt: "5px" }} noWrap fontWeight={600}>
            {name}
          </Typography>
          <IconButton sx={{ marginLeft: "auto" }} onClick={onRemoveClick}>
            <HighlightOffIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography>
          {quantity} x{" "}
          <span style={{ fontWeight: 600, color: theme.palette.primary.main }}>
            {moneyParser.format(sku?.sellingPrice || 0)}
          </span>
        </Typography>
      </div>
    </div>
  );
};

CartItem.defaultProps = {};

export default withTheme<Theme, typeof CartItem>(CartItem);
