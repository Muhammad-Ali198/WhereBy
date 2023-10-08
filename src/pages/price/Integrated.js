import { Box, Typography } from "@mui/material";
import React from "react";
import OutLook from "../../assets/images/OutLook.svg";
import GoogleDrive from "../../assets/images/GoogleDrive.svg";
import Slack from "../../assets/images/Slacks.svg";
import Miro from "../../assets/images/MiroIcon.svg";
import Trello from "../../assets/images/Trello.svg";
import Youtube from "../../assets/images/Youtube.svg";

const Companies = [
  { name: "Miro", logo: Miro },
  { name: "GoogleDrive", logo: GoogleDrive },
  { name: "Trello", logo: Trello },
  { name: "Youtube", logo: Youtube },
  { name: "OutLook", logo: OutLook },
  { name: "Slack", logo: Slack }
];

const Integrated = () => {
  return (
    <Box bgcolor={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} py={7}>
      <Box
        bgcolor={"#F4F4F4"}
        borderRadius={5}
        height={"60%"}
        width={"88%"}
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Typography mt={10} variant="h4">
          Integrated With{" "}
        </Typography>
        <Box
          bgcolor={""}
          my={7}
          width={"80%"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}>
          {Companies.map((itm) => (
            <Box display={"inherit"} flexDirection={"column"} textAlign={"center"} key={itm}>
              <Box
                bgcolor={"white"}
                borderRadius={2}
                p={2}
                display={"inherit"}
                justifyContent={"center"}>
                <img src={itm.logo} />
              </Box>
              <Typography py={1}>{itm.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Integrated;
