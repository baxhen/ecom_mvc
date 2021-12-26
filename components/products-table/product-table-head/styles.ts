import { makeStyles } from "@mui/styles";

import theme from "../../../styles/theme";
import { fadeIn } from "../../../styles/keyframes";
import { lighten } from "@mui/material";

const useStyles = makeStyles(() => ({
  ...fadeIn,
  cls_product_head: {
    display: "flex",
    width: "100%",
    height: "4rem",
    animation: `$fadeIn 1s`,

    background: lighten(theme.palette.primary.main, 0.8),
    marginBottom: "1rem",
  },

  cls_product_head__section_empty: {
    flex: 1,
  },
  cls_product_head__section: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
