import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Miro, MindfulChef, Wild } from "../../assets/AssetsExport";

const reviewData = [
  {
    companyIcon: Miro,
    message:
      "“Whereby makes it super simple for collaborating teams to jump on a video call. A single meeting link shared instantly ensures a moment of creativity is never lost.”",
    avatar: "https://i.pravatar.cc/300",
    name: "Andrey Khusid",
    rank: " CEO - Miro"
  },
  {
    companyIcon: MindfulChef,
    message:
      "When our company moved to remote working, Whereby was the perfect solution. It's so easy to use and the team loves the design. Ideal for growing businesses!",
    avatar: "https://i.pravatar.cc/301",
    name: "Giles Humphries",
    rank: " Co-founder - Mindful Chef"
  },
  {
    companyIcon: Wild,
    message:
      "I love the idea of a fixed virtual room where people can join me simply by clicking on a link.”",
    avatar: "https://i.pravatar.cc/30",
    name: "Amandine Flachs",
    rank: " CEO/Co-founder - WildMeta"
  }
];

const CollaboratorsReview = () => {
  return (
    <Box bgcolor={"white"} py={15}>
      <Typography variant="h4" textAlign={"center"} fontWeight={"bold"} pb={10}>
        What they&apos;re saying
      </Typography>
      <Box mx={10} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gap={4}>
        {reviewData.map((review, index) => (
          <Box key={index} bgcolor={"#F4F4F4"} p={4} borderRadius={5} width={"20rem"}>
            <Box textAlign={"center"} py={4}>
              <img src={review.companyIcon} alt="Company Icon" />
            </Box>
            <Box
              overflow={"scroll"}
              height={"200px"}
              width={"260px"}
              sx={{ wordBreak: "break-all", "&::-webkit-scrollbar": { display: "none" } }}>
              <Typography>{review.message}</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"left"} alignItems={"center"} gap={1} pt={5}>
              <Avatar src={review.avatar} alt="Reviewer Avatar" />
              <Box>
                <Typography fontWeight={"600"}>Andrey Khusid</Typography>
                <Typography>CEO – Miro</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CollaboratorsReview;
