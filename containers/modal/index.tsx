import React from "react";
import clsx from "clsx";

import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import MaterialModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";

import useStyles from "./styles";

interface Props extends WithThemeProps<Theme> {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const Modal: React.FC<Props> = ({
  open,
  setOpen,
  children,
  className = "",
}) => {
  const { cls_modal } = useStyles();

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <MaterialModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={clsx(cls_modal, className)}>{children}</Box>
        </Fade>
      </MaterialModal>
    </Box>
  );
};

export default withTheme<Theme, typeof Modal>(Modal);
