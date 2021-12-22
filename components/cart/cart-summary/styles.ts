import { makeStyles } from "@mui/styles";
import theme from "../../../styles/theme";
import { fadeInFromTop } from "../../../styles/keyframes";

const useStyles = makeStyles(() => ({
  cls_cart__summary: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
}));

export default useStyles;
