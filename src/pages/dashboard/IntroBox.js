import React from "react";
import { Box, Typography } from "@mui/material";
import IntroCardImage from "../../assets/images/dashboard/IntroCardImage.png";

const IntroBox = () => {
  return (
    <>
      <Box sx={{ background: "transparent" }}>
        <Typography
          fontFamily={"Custom-Roslinda"}
          gutterBottom
          fontSize={80}
          textAlign="center"
          padding="0px 250px 0px 250px">
          Build your dream video call solution
        </Typography>
        <Typography fontSize={18} textAlign="center" padding="0px 220px 0px 220px">
          Ditch corporate-looking video calls for a calm, user-friendly option, integrated directly
          into your platform using our API or SDK. Optimized for Digital Mental Health, Telehealth,
          eLearning & more...
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          padding: 6,
          width: "-webkit-fill-available"
        }}
        alt="The house from the offer."
        src={IntroCardImage}
      />
    </>
  );
};

export default IntroBox;
