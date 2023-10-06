import { Box } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import PlanCards from "./PlanCards";
import TrustedCompanies from "./TrustedCompanies";
import PlanTable from "./PlanTable";

const Index = () => {
  return (
    <Box component={"main"} sx={{ minHeight: "100vh", backgroundColor: "#F4F4F4" }}>
      <Hero />
      <PlanCards />
      <TrustedCompanies />
      <PlanTable />
    </Box>
  );
};

export default Index;
