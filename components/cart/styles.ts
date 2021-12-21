import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromTop,
  cls_cart: {
    color: theme.palette.primary.light,
  },
}));

export default useStyles;
