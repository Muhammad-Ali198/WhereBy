import React from "react";
import IntroBox from "./IntroBox";
import VideoBox from "./VideoBox";
import { Box, Container } from "@mui/material";
import TrustedCompanyBox from "./TrustedCompanyBox";
import {
  indexDelightfulVideoCallBox,
  indexIndustriesThrivingBox,
  indexIntroBox,
  indexSimpleVideoMeetingBox,
  indexTrustedCompanyBox,
  indexVideoBox
} from "./muiDashboardComponentStyles";
import IndustriesThrivingBox from "./IndustriesThrivingBox";
import SimpleVideoMeetingBox from "./SimpleVideoMeetingBox";
import DelightfulVideoCallBox from "./DelightfulVideoCallBox";
import SwipeableReviewsBox from "./SwipeableReviewsBox";

const Index = () => {
  return (
    <>
      <Box sx={indexIntroBox}>
        <Container>
          <IntroBox />
        </Container>
      </Box>
      <Box sx={indexVideoBox}>
        <VideoBox />
      </Box>
      <Box sx={indexTrustedCompanyBox}>
        <TrustedCompanyBox />
      </Box>
      <Box sx={indexIndustriesThrivingBox}>
        <IndustriesThrivingBox />
      </Box>
      <Box sx={indexSimpleVideoMeetingBox}>
        <SimpleVideoMeetingBox />
      </Box>
      <Box sx={indexDelightfulVideoCallBox}>
        <DelightfulVideoCallBox />
      </Box>
      <Box sx={indexDelightfulVideoCallBox}>
        <SwipeableReviewsBox />
      </Box>
    </>
  );
};

export default Index;
