import React from "react";
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
}

const Modal: React.FC<Props> = ({ theme, open, setOpen, children }) => {
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
          <Box className={cls_modal}>{children}</Box>
        </Fade>
      </MaterialModal>
    </Box>
  );
};

export default withTheme<Theme, typeof Modal>(Modal);
