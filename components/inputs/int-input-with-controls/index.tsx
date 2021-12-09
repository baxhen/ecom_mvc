import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextInput from "../text-input";

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  height?: string;
  width?: string;
}

const IntInputWithControls = ({
  quantity,
  setQuantity,
  height,
  width,
}: Props) => {
  return (
    <Box display="flex" height={height || "100%"} width={width || "112px"}>
      <Button
        style={{ borderRadius: "0", minWidth: "2rem" }}
        variant="contained"
        onClick={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
        }}
      >
        -
      </Button>
      <TextInput
        width="5ch"
        value={quantity}
        onChange={(e: any) => setQuantity(+e.target.value)}
        style={{ borderRadius: "0", fontSize: "15px", height: "100%" }}
      />
      <Button
        style={{ borderRadius: "0", minWidth: "2rem" }}
        variant="contained"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </Box>
  );
};

export default IntInputWithControls;
