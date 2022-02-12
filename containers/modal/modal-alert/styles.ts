import { makeStyles } from "@mui/styles";
import { checkIconOffset } from "../../../styles/keyframes";
import theme from "../../../styles/theme";

const useStyles = makeStyles(() => ({
  ...checkIconOffset,
  cls_modal: { background: "transparent !important", top: "10%" },
}));

export default useStyles;
