import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";

const useStyles = makeStyles(() => ({
  cls_header: {
    display: "flex",
    backgroundImage: "linear-gradient(to right, #BA8B02, #181818)",
  },
  cls_header__btn: {
    color: theme.palette.primary.light,
    marginLeft: "auto",
  },
}));

export default useStyles;
