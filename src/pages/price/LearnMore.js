import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Embeding } from "../../assets/AssetsExport";

const LearnMore = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        bgcolor={"white"}
        width={"88%"}
        height={"60%"}
        my={18}
        display={"inherit"}
        borderRadius={5}>
        <Box py={10} pl={6}>
          <Typography variant="h3" mb={1}>
            Looking to embed video meetings using our API?
          </Typography>
          <Typography mb={2}>
            If you&apos;re looking for our API product, click below to learn more about our plans
            and get started for free.
          </Typography>
          <Button
            variant={"contained"}
            sx={{ backgroundColor: "#211375", fontWeight: "bold", px: 3, py: 1 }}>
            learn more
          </Button>
        </Box>
        <Box component={"img"} p={10} minWidth={"50%"} src={Embeding} />
      </Box>
    </Box>
  );
};

export default LearnMore;
