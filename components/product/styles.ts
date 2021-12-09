import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";
import { fadeInFromBottom } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromBottom,
  cls_product: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flex: 1,
    },
    height: "auto",
    width: "55vw",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },

    animation: `$fadeInFromBottom 1s`,
  },
  cls_product__img: {
    height: "auto",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cls_product__content: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    "& div:nth-of-type(3)": { marginTop: "auto" },
  },
  cls_product__content__name: {
    fontWeight: 600,
  },
  cls_product__content__description: {
    marginBottom: "2rem",
  },
}));

export default useStyles;
