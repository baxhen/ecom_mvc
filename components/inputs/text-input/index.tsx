import React from "react";
import FormControl, { FormControlTypeMap } from "@mui/material/FormControl";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SxProps, Theme } from "@mui/material";

interface Sx {
  sx?: SxProps<Theme> | undefined;
}
interface Props extends OutlinedInputProps, Sx {
  controlProps?: OverridableComponent<FormControlTypeMap<{}, "div">> & any;
}

const TextInput: React.FC<Props> = ({ controlProps, ...props }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl {...controlProps}>
        <OutlinedInput {...props} />
      </FormControl>
    </Box>
  );
};

export default TextInput;
