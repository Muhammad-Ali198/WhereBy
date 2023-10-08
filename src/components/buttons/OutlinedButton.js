import React from "react";
import { Button } from "@mui/material";

const OutlinedButton = ({ msg, bgColor, color, borderColor, borderRadius }) => {
  return (
    <Button
      variant={"outlined"}
      disableRipple
      sx={{
        color: color,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        ":hover": {
          borderColor: borderColor
        }
      }}>
      {msg}
    </Button>
  );
};

export default OutlinedButton;
