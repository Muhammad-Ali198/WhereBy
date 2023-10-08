import React from "react";
import { Button } from "@mui/material";

const ContainedButton = ({ msg, bgColor, color, borderColor, borderRadius }) => {
  return (
    <Button
      disableRipple
      sx={{
        color: color,
        background: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        ":hover": {
          background: bgColor,
          borderColor: borderColor
        }
      }}>
      {msg}
    </Button>
  );
};

export default ContainedButton;
