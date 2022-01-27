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
  },
  cls_carrousel__items__item: {
    flex: "none",
    position: "relative",

    width: "100%",
    height: "200px",

    scrollSnapAlign: "start",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

export default useStyles;
