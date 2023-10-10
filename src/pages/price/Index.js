import { Container } from "@mui/material";
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
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F4F4F4"
      }}>
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
  );
};

export default Index;
