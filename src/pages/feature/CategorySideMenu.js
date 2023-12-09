import {
  Analytics,
  CompassCalibrationTwoTone,
  ControlCamera,
  DashboardCustomize,
  Handshake,
  JoinRight,
  PrivacyTip,
  Scale,
  Workspaces
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const CategorySideMenu = () => {
  const handleClick = (name) => {
    scroll.scrollTo(name);
  };

  return (
    <Box
      position={"sticky"}
      top={100}
      sx={{ backgroundColor: "#FFFFFF", borderRadius: 3, display: { xs: "none", lg: "block" } }}
      width={"50%"}
      height={540}>
      <Box p={3}>
        <Typography color={"gray"}>Catogory:</Typography>
        {CatogoryMenuDate.map((itm) => (
          <Link
            key={itm.name}
            to={itm.name}
            smooth={true}
            duration={400}
            activeClass="active"
            spy={true}
            offset={-70}>
            <Box
              key={itm.name}
              sx={{ "&:hover": { bgcolor: green[100] }, cursor: "pointer" }}
              display={"flex"}
              gap={1}
              justifyContent={"flex-start"}
              alignItems={"center"}
              borderRadius={3}
              ml={1}
              my={1.5}
              p={1}
              onClick={() => handleClick(itm.name)}>
              <itm.icon />
              <Typography>{itm.name}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CategorySideMenu;

const CatogoryMenuDate = [
  { icon: Handshake, name: "Engagement" },
  { icon: DashboardCustomize, name: "Customization" },
  { icon: Workspaces, name: "Collaboration" },
  { icon: Analytics, name: "Analytics & Insights" },
  { icon: JoinRight, name: "Integrations & Extensibility" },
  { icon: ControlCamera, name: "Room Management & Controls" },
  { icon: PrivacyTip, name: "Privacy & Security" },
  { icon: Scale, name: "Scale & Reliability" },
  { icon: CompassCalibrationTwoTone, name: "Compatibility" }
];
