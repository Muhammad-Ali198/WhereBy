import { Box, Button, Typography } from "@mui/material";
import React from "react";

const PriceFooter = () => {
  return (
    <Box bgcolor={"white"}>
      <Box display={"flex"} gap={1} py={20}>
        {footerData.map((itm, idx) => (
          <Box
            key={idx}
            bgcolor={""}
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}>
            <Box mb={2} textAlign={"center"}>
              <Typography variant="h5" fontSize={30}>
                {itm.catogory}
              </Typography>
            </Box>
            {itm.link.map((lnk) => (
              <Button
                key={lnk}
                sx={{ color: "black", mb: 1, ":hover": { textDecoration: "underline" } }}
                disableRipple>
                {lnk}
              </Button>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PriceFooter;

const footerData = [
  {
    catogory: "About",
    link: ["About us", "Our vision", "Careers", "Press"]
  },
  {
    catogory: "Product",
    link: ["Embedded", "Meetings", "Whats New", "Status", "Reference Docs"]
  },
  {
    catogory: "Pricing",
    link: ["For Embedded", "For Meetings"]
  },
  {
    catogory: "Social",
    link: ["Blog", "Twitter", "LinkedIn", "Instagram", "Facebook"]
  },
  {
    catogory: "Support",
    link: [
      "Support Center",
      "Privacy Policy",
      "Terns of Service",
      "Cookie Policy",
      "Cookie Settings",
      "GDPR Statement",
      "Security",
      "Sitemap"
    ]
  },
  {
    catogory: "Get in touch",
    link: ["Contact Support"]
  }
];

// <Box bgcolor={"coral"} flex={1}>
// 2
// </Box>
// <Box bgcolor={"red"} flex={1}>
// 3
// </Box>
// <Box bgcolor={"lightcoral"} flex={1}>
// 4
// </Box>
// <Box bgcolor={"blue"} flex={1}>
// 5
// </Box>
// <Box bgcolor={"orange"} flex={1}>
// 6
// </Box>
