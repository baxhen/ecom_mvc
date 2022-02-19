import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
import { fadeInFromTop } from "../../styles/keyframes";

const useStyles = makeStyles(() => ({
  ...fadeInFromTop,
  cls_header: {
    display: "flex",
    gap: "1rem",
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    "& > h5:nth-of-type(2)": {
      marginLeft: "auto",
    },
    "& > *": { animation: `$fadeInFromTop 1s` },
  },
  cls_header__logo: {
    cursor: "pointer",
  },
}));

export default useStyles;
