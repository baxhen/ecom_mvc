import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { fadeIn } from "./keyframes";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {},
  },
  palette: {
    primary: {
      main: "#ffd302",
    },
    secondary: {
      main: "#33361a",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

export default theme;
