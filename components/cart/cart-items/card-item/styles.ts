import { makeStyles } from "@mui/styles";
import theme from "../../../../styles/theme";
import { fadeInFromTop } from "../../../../styles/keyframes";

const useStyles = makeStyles(() => ({
  cls_cart__item: {
    display: "flex",
    gap: "0.7rem",
    height: "64px",
  },
  cls_cart__item__content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
}));

export default useStyles;
