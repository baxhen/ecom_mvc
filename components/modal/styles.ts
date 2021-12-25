import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  cls_modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 512,
    borderRadius: "7px",
    background: "white",
    boxShadow: "24px",
    padding: "1rem",
  },
}));

export default useStyles;
