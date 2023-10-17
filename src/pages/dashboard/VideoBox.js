import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import dashboardVideo from "../../assets/videos/dashboardVideo.mp4";
import { ContainedButton } from "../../components/ComponentExporter";
const VideoBox = () => {
  return (
    <>
      <Grid container direction={{ xs: "column-reverse", md: "row" }}>
        <Grid item sm={12} md={6} lg={6}>
          <Box
            loop
            muted
            autoPlay
            mt={{ md: 10, lg: 0 }}
            // maxWidth={00}
            width={"100%"}
            component="video"
            src={dashboardVideo}
            sx={{ borderRadius: 3 }}
          />
          {/* <Box sx={{ background: "pink", height: 400, width: 400 }} /> */}
        </Grid>
        <Grid sx={{ px: 4, py: 5 }} item sm={12} md={6} lg={6}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontFamily={"Custom-Roslinda"} fontSize={"40px"}>
              The easiest way to add video calls into your platform
            </Typography>
            <Typography fontFamily={'"Inter", sans-serif'} fontSize={"16px"} mt={2}>
              Get started in minutes with just a few lines of code. Fully branded, customizable and
              seamlessly integrated into your platform using our API and SDK.
            </Typography>
            <Typography
              mt={2}
              fontSize={"16px"}
              component={Link}
              fontFamily={'"Inter", sans-serif'}>
              Discover More
            </Typography>
            <ContainedButton
              msg={"Try for free"}
              // varient={"outlined"}
              bgColor={"rgb(43, 24, 155)"}
              color={"white"}
              borderColor={"rgb(43, 24, 155)"}
              borderRadius={3}
              maxWidth={"200px"}
              py={1}
              mt={2}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoBox;
