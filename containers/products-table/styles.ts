import { makeStyles } from "@mui/styles";

import theme from "../../styles/theme";
import { fadeIn } from "../../styles/keyframes";
import { lighten } from "@mui/material";

const useStyles = makeStyles(() => ({
  ...fadeIn,
  cls_products: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    animation: `$fadeIn 1s`,

    [theme.breakpoints.up(768)]: {
      flexDirection: "column",
      gap: "2rem",
      width: "90%",
    },
  },
  cls_products_items_container: {
    [theme.breakpoints.down(769)]: {
      "& > div:nth-of-type(odd)": {
        background: lighten(theme.palette.primary.main, 0.95),
      },
    },
  },
}));

export default useStyles;
