import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromTop,
  cls_cart: {
    color: theme.palette.primary.light,
  },
  cls_cart__popover: {
    width: "320px",
    height: "480px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
}));

export default useStyles;
