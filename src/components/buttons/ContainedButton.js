import React from "react";
import { Button } from "@mui/material";

const ContainedButton = ({
  msg,
  bgColor,
  color,
  borderColor,
  borderRadius,
  // padding = "10px",
  ...restProps
}) => {
  return (
    <Button
      disableRipple
      sx={{
        color: color,
        background: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        fontFamily: '"Inter", sans-serif',
        fontWeight: "bold",
        textTransform: "none",
        // padding: padding,
        ...restProps,
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
