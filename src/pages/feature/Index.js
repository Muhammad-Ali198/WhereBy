import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import HeroAndCategoryStack from "./HeroAndCategoryStack";
import FeatureOutro from "./FeatureOutro";

const Index = () => {
  return (
    <>
      <Box bgcolor={"#F4F4F4"} p={0} m={0}>
        <Toolbar />
        <Container disableGutters>
          <HeroAndCategoryStack />
          <FeatureOutro />
        </Container>
      </Box>
    </>
  );
};

export default Index;
