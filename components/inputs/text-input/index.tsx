import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

export default function TextInput(props: any) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: props.width || "2ch", height: "100%" }}>
        <OutlinedInput {...props} />
      </FormControl>
    </Box>
  );
}
