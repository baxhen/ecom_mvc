import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput(props: any) {
  return (
    <FormControl sx={{ m: 1, width: "100%", height: "100%", margin: "0" }}>
      <InputLabel id="demo-controlled-open-select-label">
        {props.label}
      </InputLabel>
      <Select {...props}>
        {/* <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem> */}
        {props?.options?.map((option: any, i: number) => (
          <MenuItem key={`${option.value}-${i}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
