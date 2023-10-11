import React from "react";
import { Box, Container } from "@mui/material";
import IntroBox from "./IntroBox";

const Index = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F8DBD5", pt: 20 }}>
        <Container>
          <IntroBox />
        </Container>
      </Box>
    </>
  );
};

export default Index;
