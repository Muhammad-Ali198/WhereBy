import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import eLearning from "../../assets/images/dashboard/eLearning.png";
import teleHealth from "../../assets/images/dashboard/teleHealth.png";
import digitalMentalHealth from "../../assets/images/dashboard/digitalMentalHealth.png";
import {
  industriesThrivingBoxTypographies,
  industriesThrivingImageBox
} from "./muiDashboardComponentStyles";

const IndustriesThrivingBox = () => {
  return (
    <>
      <Box sx={{ background: "transparent" }}>
        <Typography
          mb={6}
          textAlign="center"
          lineHeight={1.1}
          fontSize={{ xs: 26, sm: 36, md: 56 }}
          fontFamily={"Custom-Roslinda"}
          padding={{
            xs: "0px 10px 0px 10px",
            sm: "0px 100px 0px 100px",
            lg: "0px 250px 0px 250px"
          }}>
          Industries thriving with embedded video calls
        </Typography>
      </Box>
      <Grid spacing={3} container direction="row" alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}>
          <Box
            sx={industriesThrivingImageBox}
            component="img"
            alt="Medical Images."
            src={teleHealth}
          />
          <Typography mt={3} fontSize={18} textAlign={"center"}>
            Telehealth
          </Typography>
          <Typography mt={1} fontSize={16} textAlign={"center"}>
            Offer secure, reliable video calls to connect practitioners & patients anywhere,
            anytime.
          </Typography>
          <Typography mt={1} sx={industriesThrivingBoxTypographies}>
            Read more.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}>
          <Box
            sx={industriesThrivingImageBox}
            component="img"
            alt="Medical Images."
            src={digitalMentalHealth}
          />
          <Typography mt={3} fontSize={18} textAlign={"center"}>
            Digital Mental Health
          </Typography>
          <Typography mt={1} fontSize={16} textAlign={"center"}>
            Increase patient trust with calm, user-friendly teletherapy calls.
          </Typography>
          <Typography mt={1} sx={industriesThrivingBoxTypographies}>
            Read more.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}>
          <Box
            sx={industriesThrivingImageBox}
            component="img"
            alt="Medical Images."
            src={eLearning}
          />
          <Typography mt={3} fontSize={18} textAlign={"center"}>
            eLearning
          </Typography>
          <Typography mt={1} fontSize={16} textAlign={"center"}>
            Integrate engaging and fun virtual classroom experiences for students and teachers.
          </Typography>
          <Typography mt={1} sx={industriesThrivingBoxTypographies}>
            Read more.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default IndustriesThrivingBox;
