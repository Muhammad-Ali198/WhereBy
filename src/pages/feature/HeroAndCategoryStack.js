import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CategorySideMenu from "./CategorySideMenu";
import CategoryContent from "./CategoryContent";

const HeroAndCategoryStack = () => {
  return (
    <>
      <Box bgcolor={"#FFFFFF"} textAlign={"center"} pt={22} pb={10}>
        <Typography
          sx={{ mx: { xs: 5, md: 35 } }}
          fontWeight={"bold"}
          variant="h3"
          fontFamily={"Custom-Roslinda"}>
          Check out the features that you can get with Whereby
        </Typography>
      </Box>
      <Container sx={{ pt: 10 }}>
        <Stack direction={"row"} gap={8}>
          <CategorySideMenu />
          <CategoryContent />
        </Stack>
        <Divider sx={{ my: 10 }} />
      </Container>
    </>
  );
};

export default HeroAndCategoryStack;
