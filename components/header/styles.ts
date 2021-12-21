import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromTop,
  cls_header: {
    display: "flex",
    backgroundImage: "linear-gradient(to right, #BA8B02, #181818)",
    "& div:nth-of-type(1)": {
      marginLeft: "auto",
    },
    "& > *": { animation: `$fadeInFromTop 1s` },
  },
  cls_header__logo: {
    cursor: "pointer",
  },
}));

export default useStyles;
