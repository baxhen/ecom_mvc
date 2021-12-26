import { lighten } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  cls_cart_total: {
    width: "100%",
    padding: "1rem",
    height: "20rem",
    background: lighten(theme.palette.primary.main, 0.95),
    [theme.breakpoints.up(768)]: {
      width: "90%",
    },
  },
  cls_cart_total__title: {
    margin: "1rem 0",
  },
  cls_cart_total__summary: {
    border: `1px solid ${theme.palette.primary.main}`,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    "& > div": {
      padding: "1rem",
      flex: 1,
    },
    "& div:nth-of-type(2)": {
      background: lighten(theme.palette.primary.main, 0.7),
    },
  },
  cls_cart_total__summary__item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cls_cart_total__action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginTop: "2rem",
  },
}));

export default useStyles;
