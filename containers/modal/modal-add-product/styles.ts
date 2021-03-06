import { makeStyles } from "@mui/styles";
import { checkIconOffset } from "../../../styles/keyframes";
import theme from "../../../styles/theme";

const useStyles = makeStyles(() => ({
  ...checkIconOffset,
  cls_modal: {},
  cls_modal__icon: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "7rem",

    "& path": {
      fill: theme.palette.primary.main,
      strokeWidth: "0.5px",
      stroke: theme.palette.primary.main,
      strokeDasharray: 270,
      strokeDashoffset: 0,
      animation: `$checkIconOffset 1s linear`,
    },
  },
}));

export default useStyles;
