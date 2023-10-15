import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import PlanCards from "./PlanCards";
import TrustedCompanies from "./TrustedCompanies";
import PlanTable from "./PlanTable";
import LearnMore from "./LearnMore";
import CollaboratorsReview from "./CollaboratorsReview";
import Integrated from "./Integrated";
import FrequentlyQuestions from "./FrequentlyQuestions";
import LearnMore1 from "./LearnMore1";
import PriceFooter from "./PriceFooter";

const Index = () => {
  return (
    <>
      <Box bgcolor={"#F4F4F4"}>
        <Toolbar />
        <Container disableGutters>
          <Hero />
          <PlanCards />
          <TrustedCompanies />
          <PlanTable />
          <LearnMore />
          <CollaboratorsReview />
          <Integrated />
          <FrequentlyQuestions />
          <LearnMore1 />
          <PriceFooter />
        </Container>
      </Box>
    </>
  );
};

export default Index;
