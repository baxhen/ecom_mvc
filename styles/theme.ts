import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "::-webkit-scrollbar": {
            // display: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { width: "100%" },
      },
    },
    MuiButton: { styleOverrides: { root: { borderRadius: 0 } } },
  },
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
