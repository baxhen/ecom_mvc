import React from "react";
import { useRouter } from "next/router";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import Box from "@mui/material/Box";
import { Alert, AlertColor, Button, Snackbar, Theme } from "@mui/material";

import useStyles from "./styles";

interface Props extends WithThemeProps<Theme> {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  severity: AlertColor;
}

const ModalAlert: React.FC<Props> = ({ open, setOpen, severity, message }) => {
  const router = useRouter();

  const { cls_modal } = useStyles();

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={severity} variant="standard" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default withTheme<Theme, typeof ModalAlert>(ModalAlert);
