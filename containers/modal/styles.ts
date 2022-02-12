import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  cls_modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "512",
    borderRadius: "7px",
    background: "white",
    boxShadow: "24px",
    padding: "1rem",

    [theme.breakpoints.down(840)]: { width: "60vw" },
    [theme.breakpoints.down(700)]: { width: "70vw" },
    [theme.breakpoints.down(660)]: { width: "80vw" },
    [theme.breakpoints.down(600)]: { width: "90vw" },
  },
}));

export default useStyles;
