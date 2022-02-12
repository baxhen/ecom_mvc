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
    padding: "1rem",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
    },
  },
  cls_product_item__section: {
    height: "2.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up(768)]: {
      flex: 2,
      height: "4rem",
      justifyContent: "center",
    },
  },
  cls_product_item__section_empty: {
    height: "2.5rem",
    display: "flex",
    width: "2.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up(768)]: {
      flex: 1,
      height: "4rem",
      justifyContent: "center",
    },
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
