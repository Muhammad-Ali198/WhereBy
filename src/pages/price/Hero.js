import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Hero = () => {
  const [selected, setSelected] = useState("monthly");

  return (
    <>
      <Box textAlign={"center"} py={2} mb={10}>
        <Typography my={5} fontWeight={"bold"} color={"#2B189B"} fontFamily={'"Inter", sans-serif'}>
          Whereby Meeting
        </Typography>
        <Typography
          fontSize={"4.5rem"}
          fontWeight={"bold"}
          mb={3}
          fontFamily={'"EB Garamond", serif'}>
          Choose plan for your meetings
        </Typography>
        <Box justifyContent={"center"} display={"flex"} pt={3}>
          <Box
            bgcolor={""}
            backgroundColor={"white"}
            display={"inherit"}
            justifyContent={"center"}
            height={"3rem"}
            width={"16rem"}
            sx={{ borderRadius: 10, boxShadow: "1px 1px 1px -1px rgba(0,0,0,0.17)" }}>
            <Button
              disableRipple
              fontFamily={'"Inter", sans-serif'}
              sx={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: "",
                color: selected === "monthly" ? "#2B189B" : "gray",
                border: selected === "monthly" ? "blue solid 1px" : "",
                transition: "ease-in 0.8s all"
              }}
              onClick={() => setSelected("monthly")}>
              Monthly
            </Button>
            <Button
              fontFamily={'"Inter", sans-serif'}
              disableRipple
              sx={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: "",
                color: selected === "annual" ? "#2B189B" : "gray",
                border: selected === "annual" ? "blue solid 1px" : "",
                transition: "ease-in 0.8s all"
              }}
              onClick={() => setSelected("annual")}>
              Annual
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
