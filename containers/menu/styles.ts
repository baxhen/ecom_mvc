import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromTop,
  cls_menu: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    height: "100vh",
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,

    "& > *": { animation: `$fadeInFromTop 1s` },
  },
  cls_menu__instance: {
    cursor: "pointer",
    color: "white",
  },
  cls_menu__username: { color: "white", fontSize: "0.8rem" },

  cls_menu__list: {
    "& > .MuiListItem-root:nth-of-type(4)": { marginTop: "auto" },
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
