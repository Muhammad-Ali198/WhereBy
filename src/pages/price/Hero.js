import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box textAlign={"center"} p={2} mb={10}>
        <Typography my={3} fontWeight={"bold"} color={"#2B189B"}>
          Whereby Meeting
        </Typography>
        <Typography fontSize={"4.5rem"} mb={3}>
          Choose plan for your meetings
        </Typography>
        <Box justifyContent={"center"} display={"flex"}>
          <Box
            backgroundColor={"white"}
            display={"inherit"}
            justifyContent={"center"}
            sx={{ borderRadius: 10, boxShadow: "1px 1px 1px -1px rgba(0,0,0,0.17)" }}>
            <Button
              sx={{
                borderRadius: 10,
                backgroundColor: "",
                p: 1.7,
                px: 2.5,
                color: "#294139",
                "&:hover": { border: "blue solid 2px" }
              }}>
              Monthly
            </Button>
            <Button
              sx={{
                borderRadius: 10,
                backgroundColor: "",
                p: 1.7,
                px: 2.5,
                color: "#294139",
                "&:hover": { border: "blue solid 2px" }
              }}>
              Annual
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
