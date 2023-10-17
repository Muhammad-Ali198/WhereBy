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
          fontSize={{ xs: 36, sm: 60, md: 80 }}
          textAlign="center"
          padding={{
            xs: "0px 100px 0px 100px",
            sm: "0px 150px 0px 150px",
            lg: "0px 250px 0px 250px"
          }}>
          Build your dream video call solution
        </Typography>
        <Typography
          fontSize={{ sm: 16, md: 18 }}
          textAlign="center"
          padding={{
            xs: "0px 70px 0px 70px",
            sm: "0px 120px 0px 120px",
            md: "0px 220px 0px 220px"
          }}>
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
