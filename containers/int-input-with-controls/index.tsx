import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextInput from "../../components/text-input";
import { Typography } from "@mui/material";

interface Props {
  quantity: number;
  maxQuantity?: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  height?: string;
  maxHeight?: string;
  width?: string;
}

const IntInputWithControls = ({
  quantity,
  setQuantity,
  maxQuantity,
  height,
  maxHeight,
  width,
}: Props) => {
  return (
    <Box
      display="flex"
      height={height || "100%"}
      width={width || "180px"}
      maxHeight={maxHeight}
    >
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
        controlProps={{ sx: { width: "5ch", height: "100%" } }}
        value={quantity}
        onChange={(e: any) => setQuantity(+e.target.value)}
        sx={{ borderRadius: "0", fontSize: "15px", height: "100%" }}
      />
      <Button
        style={{ borderRadius: "0", minWidth: "2rem" }}
        variant="contained"
        onClick={() => {
          if (maxQuantity) {
            if (quantity < maxQuantity) setQuantity(quantity + 1);
            return;
          }

          setQuantity(quantity + 1);
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default IntInputWithControls;
