import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { delightfulVideoCallImageBox } from "./muiDashboardComponentStyles";
import delightfulVideoMeetingGridImage1 from "../../assets/images/dashboard/delightfulVideoCallGrid1.png";
import delightfulVideoMeetingGridImage2 from "../../assets/images/dashboard/delightfulVideoCallGrid2.png";
import delightfulVideoMeetingGridImage3 from "../../assets/images/dashboard/delightfulVideoCallGrid3.png";
import delightfulVideoMeetingGridImage4 from "../../assets/images/dashboard/delightfulVideoCallGrid4.png";
import { ContainedButton } from "../../components/ComponentExporter";

const DelightfulVideoCallBox = () => {
  return (
    <>
      <Typography
        lineHeight={1.1}
        fontFamily={"Custom-Roslinda"}
        textAlign={"center"}
        fontSize={{ xs: 30, sm: 36, md: 40 }}>
        Delightful video calls
      </Typography>
      <Typography
        mt={2}
        mb={5}
        fontSize={"16px"}
        fontFamily={'"Inter", sans-serif'}
        textAlign={"center"}>
        Increase customer trust and confidence by embedding secure video calls inside your service.
      </Typography>
      <Grid spacing={4} container>
        <Grid sx={{ px: 1, py: 1 }} item xs={12} sm={12} md={6} lg={6}>
          <Box
            component="img"
            alt="Medical Images."
            sx={delightfulVideoCallImageBox}
            src={delightfulVideoMeetingGridImage1}
          />
          <Typography
            mt={2}
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={'"Inter", sans-serif'}>
            Security and privacy focused
          </Typography>
          <Typography mt={1} fontSize={"16px"} fontFamily={'"Inter", sans-serif'}>
            All content is encrypted, we are GDPR and ISO27001 certified and can be implemented with
            HIPAA compliance.
          </Typography>
        </Grid>
        <Grid sx={{ px: 1, py: 1 }} item xs={12} sm={12} md={6} lg={6}>
          <Box
            component="img"
            alt="Medical Images."
            sx={delightfulVideoCallImageBox}
            src={delightfulVideoMeetingGridImage2}
          />
          <Typography
            mt={2}
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={'"Inter", sans-serif'}>
            Superior Reliability
          </Typography>
          <Typography mt={1} fontSize={"16px"} fontFamily={'"Inter", sans-serif'}>
            Our infrastructure is scalable to support you as you grow with a consistently high
            quality video call experience.
          </Typography>
        </Grid>
        <Grid sx={{ px: 1, py: 1 }} item xs={12} sm={12} md={6} lg={6}>
          <Box
            component="img"
            alt="Medical Images."
            sx={delightfulVideoCallImageBox}
            src={delightfulVideoMeetingGridImage3}
          />
          <Typography
            mt={2}
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={'"Inter", sans-serif'}>
            User-friendly
          </Typography>
          <Typography mt={1} fontSize={"16px"} fontFamily={'"Inter", sans-serif'}>
            Provide a calm, easy-to-use experience packed with features and fully customizable to
            fit your brand and needs.
          </Typography>
        </Grid>
        <Grid sx={{ px: 1, py: 1 }} item xs={12} sm={12} md={6} lg={6}>
          <Box
            component="img"
            alt="Medical Images."
            sx={delightfulVideoCallImageBox}
            src={delightfulVideoMeetingGridImage4}
          />{" "}
          <Typography
            mt={2}
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={'"Inter", sans-serif'}>
            Friendly & helpful team
          </Typography>
          <Typography mt={1} fontSize={"16px"} fontFamily={'"Inter", sans-serif'}>
            We want to help you grow! We offer resources to ensure you get started quickly, build
            successfully and in turn support your users.
          </Typography>
        </Grid>
        <Grid display={"flex"} justifyContent={"center"} item xs={12} sm={12} md={12} lg={12}>
          <ContainedButton
            msg={"Try for free"}
            bgColor={"rgb(43, 24, 155)"}
            color={"white"}
            borderColor={"rgb(43, 24, 155)"}
            borderRadius={3}
            maxWidth={"150px"}
            whiteSpace={"nowrap"}
            py={1.5}
            px={14}
            mt={2}
            mb={{ xs: 2, sm: 2, md: 2, lg: 0 }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DelightfulVideoCallBox;
