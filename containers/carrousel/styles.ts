import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  cls_carrousel: {
    width: "90vw",
  },
  cls_carrousel__items: {
    display: "flex",

    overflowX: "auto",

    scrollSnapType: "x mandatory",
    "-webkit-overflow-scrolling": "touch",
    scrollBehavior: "smooth",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  cls_carrousel__items__item: {
    flex: "none",
    position: "relative",

    width: "100%",
    height: "200px",

    scrollSnapAlign: "start",

    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
