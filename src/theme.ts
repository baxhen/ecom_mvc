import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#BA8B02",
    },
    secondary: {
      main: "#181818",
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
