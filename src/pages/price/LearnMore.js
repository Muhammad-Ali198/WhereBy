import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Embeding from "../../assets/images/Embeding.png";

const LearnMore = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box
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
          <Button variant={"contained"} sx={{ backgroundColor: "#211375", px: 3, py: 1 }}>
            learn more
          </Button>
        </Box>
        <Box p={10}>
          <img width={"400rem"} src={Embeding} />
        </Box>
      </Box>
    </Box>
  );
};

export default LearnMore;
