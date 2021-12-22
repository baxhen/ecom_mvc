import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromTop,
  cls_header: {
    display: "flex",
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    "& > div:nth-of-type(1)": {
      marginLeft: "auto",
    },
    "& > *": { animation: `$fadeInFromTop 1s` },
  },
  cls_header__logo: {
    cursor: "pointer",
  },
}));

export default useStyles;
