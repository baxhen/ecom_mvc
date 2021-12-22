import { makeStyles } from "@mui/styles";
import theme from "../../../styles/theme";
import { fadeInFromTop } from "../../../styles/keyframes";

const useStyles = makeStyles(() => ({
  cls_cart__items: {
    height: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
}));

export default useStyles;
