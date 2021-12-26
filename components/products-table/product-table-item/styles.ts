import { makeStyles } from "@mui/styles";

import theme from "../../../styles/theme";
import { fadeIn } from "../../../styles/keyframes";
import { lighten } from "@mui/material";

const useStyles = makeStyles(() => ({
  ...fadeIn,
  cls_product_item: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    animation: `$fadeIn 1s`,

    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
  },
  cls_product_item__section: {
    height: "2.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cls_product_item__delete_btn: {
    background: theme.palette.primary.main,
    borderRadius: 0,
    "&:hover, &:focus": {
      background: lighten(theme.palette.primary.main, 0.1),
    },
  },
}));

export default useStyles;
