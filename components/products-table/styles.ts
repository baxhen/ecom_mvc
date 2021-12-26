import { makeStyles } from "@mui/styles";

import theme from "../../styles/theme";
import { fadeIn } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeIn,
  cls_products: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    animation: `$fadeIn 1s`,

    [theme.breakpoints.up(768)]: {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
