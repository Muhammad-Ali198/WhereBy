import { Box, Typography } from "@mui/material";
import React from "react";
import Ogilvy from "../../assets/images/Ogilvy.svg";
import HubSpot from "../../assets/images/HubSpot.svg";
import Netflix from "../../assets/images/Netflix.svg";
import Ikea from "../../assets/images/Ikea.svg";
import Spotify from "../../assets/images/Spotify.svg";
import Shopify from "../../assets/images/Shopify.svg";

const TrustedCompanies = () => {
  return (
    <Box
      m={8}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Typography>Trusted by more than 30,000 companies</Typography>
      <Box my={3} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={8}>
        <img src={Ogilvy} />
        <img src={HubSpot} />
        <img src={Netflix} />
        <img src={Ikea} />
        <img src={Spotify} />
        <img src={Shopify} />
      </Box>
    </Box>
  );
};

export default TrustedCompanies;
