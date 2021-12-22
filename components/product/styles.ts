import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
import { fadeIn } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeIn,
  cls_product: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flex: 1,
    },
    height: "auto",
    width: "40vw",
    animation: `$fadeIn 1s`,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down(660)]: {
      width: "90vw",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  cls_product__content__description: {
    marginBottom: "2rem",
  },
  cls_product__content__price: {
    marginBottom: ".5rem",
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
