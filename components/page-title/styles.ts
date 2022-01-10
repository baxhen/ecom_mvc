import { lighten } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fadeIn } from "../../styles/keyframes";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  ...fadeIn,
  cls_page_title: {
    width: "90%",
    display: "flex",
    height: "5rem",
    justifyContent: "center",
    alignItems: "center",
    background: lighten(theme.palette.primary.main, 0.5),

    animation: `$fadeIn 1s`,

    [theme.breakpoints.down(769)]: {
      width: "100%",
    },
    padding: "1rem",
    textAlign: "center",
  },
}));

export default useStyles;
