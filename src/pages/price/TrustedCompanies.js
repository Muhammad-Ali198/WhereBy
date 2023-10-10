import { Box, Typography } from "@mui/material";
import React from "react";

import { Shopify, Ikea, Netflix, Spotify, HubSpot, Ogilvy } from "../../assets/AssetsExport";

const iconData = [HubSpot, Ogilvy, Netflix, Ikea, Spotify, Shopify];

const TrustedCompanies = () => {
  return (
    <Box my={8} textAlign={"center"}>
      <Typography mt={18}>Trusted by more than 30,000 companies</Typography>
      <Box
        my={3}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        gap={2}>
        {iconData.map((icon, idx) => (
          <Box key={idx} px={3} py={3}>
            <img height={30} src={icon} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrustedCompanies;
