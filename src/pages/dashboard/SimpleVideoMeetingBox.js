import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { ContainedButton } from "../../components/ComponentExporter";
import videCallMeeting from "../../assets/images/dashboard/videoCallMeeting.png";
import { simpleVideoMeetingImageBox } from "./muiDashboardComponentStyles";

const SimpleVideoMeetingBox = () => {
  return (
    <>
      <Grid
        sx={{ backgroundColor: "#F8DBD5", width: "-webkit-fill-available", p: 2, borderRadius: 3 }}
        container>
        <Grid sx={{ px: 4, py: 5 }} item xs={12} sm={12} md={12} lg={6}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ sm: "center", lg: "flex-start" }}>
            <Typography
              lineHeight={1.1}
              fontSize={{ xs: 30, sm: 40, md: 60 }}
              fontFamily={"Custom-Roslinda"}
              textAlign={{ xs: "center", sm: "center", lg: "left" }}>
              Looking for simple video meetings?
            </Typography>
            <Typography
              mt={2}
              fontSize={"16px"}
              fontFamily={'"Inter", sans-serif'}
              textAlign={{ xs: "center", sm: "center", lg: "left" }}>
              If you want to host video calls in your browser with no downloads, check out Whereby
              Meetings.
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
              bgColor={"rgb(43, 24, 155)"}
              color={"white"}
              borderColor={"rgb(43, 24, 155)"}
              borderRadius={3}
              maxWidth={"150px"}
              py={1.5}
              px={4}
              mt={2}
              mb={{ xs: 2, sm: 2, md: 2, lg: 0 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box
            sx={simpleVideoMeetingImageBox}
            component="img"
            alt="Medical Images."
            src={videCallMeeting}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SimpleVideoMeetingBox;
