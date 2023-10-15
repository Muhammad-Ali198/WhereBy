import React from "react";
import IntroBox from "./IntroBox";
import VideoBox from "./VideoBox";
import { Box, Container } from "@mui/material";
import TrustedCompanyBox from "./TrustedCompanyBox";

const Index = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F8DBD5", pt: 20, mb: 10 }}>
        <Container>
          <IntroBox />
        </Container>
      </Box>
      <Box
        sx={{
          my: 100,
          maxWidth: { sm: "500px", md: "800px", lg: "1100px" },
          margin: "auto",
          backgroundColor: "white"
        }}>
        {/* <Container maxWidth={"lg"}> */}
        <VideoBox />
        {/* </Container> */}
      </Box>
      <Box sx={{ backgroundColor: "white", px: 20, my: 18 }}>
        <Container>
          <TrustedCompanyBox />
        </Container>
      </Box>
    </>
  );
};

export default Index;
