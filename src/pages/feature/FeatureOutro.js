import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Oppla } from "../../assets/AssetsExport";

const FeatureOutro = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Typography gutterBottom variant="h3" fontFamily={'"EB Garamond", serif'}>
          Get Stated Now
        </Typography>
        <Button
          variant="contained"
          sx={{ px: 4, py: 2, fontWeight: "bold", bgcolor: "#026654", borderRadius: 3 }}>
          Try for free
        </Button>
        <Box component={"img"} src={Oppla} pt={5} sx={{ width: "60%" }} />
      </Box>
    </>
  );
};

export default FeatureOutro;
