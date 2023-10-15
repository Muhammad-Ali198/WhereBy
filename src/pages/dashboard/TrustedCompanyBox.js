import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Unobravo from "../../assets/svgs/Unobravo.svg";
import Indeed from "../../assets/svgs/Indeed.svg";
import Tebra from "../../assets/svgs/Tebra.svg";
import EduShark from "../../assets/svgs/EduShark.svg";
import Accurx from "../../assets/svgs/Accurx.svg";
import Wellnite from "../../assets/svgs/Wellnite.svg";

const TrustedCompanyBox = () => {
  return (
    <>
      <Typography pb={6} fontFamily={'"Inter", sans-serif'} fontSize={"18px"} textAlign={"center"}>
        Trusted by 5+ million people at companies like
      </Typography>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Box component="img" src={Unobravo} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Box component="img" src={Indeed} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Box component="img" src={Tebra} width={150} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Box component="img" src={EduShark} width={140} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Box component="img" src={Accurx} width={110} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Box component="img" src={Wellnite} width={150} />
        </Grid>
      </Grid>
    </>
  );
};

export default TrustedCompanyBox;
