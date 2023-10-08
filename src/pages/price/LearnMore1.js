import { Box, Button, Typography } from "@mui/material";
import React from "react";

const LearnMore1 = () => {
  return (
    <Box display={"flex"} height={380}>
      <Box flex={1} bgcolor={""} sx={{ display: { sm: "none", md: "flex" } }}></Box>
      <Box
        flex={2}
        bgcolor={""}
        display={"inherit"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}>
        <Typography variant="h4" mb={3} fontWeight={600}>
          Say goodbye to bad meetings
        </Typography>
        <Button
          variant="contained"
          sx={{ p: 2, px: 3, borderRadius: 3, backgroundColor: "#211375" }}>
          Try for free
        </Button>
      </Box>
      <Box flex={1} bgcolor={""} sx={{ display: { sm: "none", md: "flex" } }}></Box>
    </Box>
  );
};

export default LearnMore1;
