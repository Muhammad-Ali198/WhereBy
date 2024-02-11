import React, { useState } from "react";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { NavIcon } from "../assets/AssetsExport";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { ContainedButton, OutlinedButton } from "../components/ComponentExporter";
import { Embeding } from "../assets/AssetsExport";
import VideoCallMeeting from "../assets/images/dashboard/videoCallMeeting.png";
import { CalculateOutlined, CampaignOutlined, ListOutlined } from "@mui/icons-material";

const NavBar = ({ handleDrawerToggle, navBgColor }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(null);

  return (
    <AppBar
      elevation={navBgColor == "transparent" ? 0 : 1}
      sx={{
        background: navBgColor,
        transition: "background .5s ease-in",
        "&:hover": { background: "white" }
      }}
      component="nav">
      <Toolbar sx={{ background: "transparent" }}>
        <Container
          disableGutters
          sx={{
            display: "flex",
            py: navBgColor == "transparent" ? 0 : 3,
            transition: "padding .5s ease-out"
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "black", display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
          {/* Logo Box */}
          <Box
            component="img"
            sx={{
              // flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
              // height: 80,
              width: 120,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 }
            }}
            alt="The house from the offer."
            src={NavIcon}
          />
          {/* <Box sx={{ flexGrow: 1 }}></Box> */}
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "space-evenly"
            }}>
            {["dashboard", "feature", "price", "settings"].map((item) => (
              <Button
                key={item}
                sx={{ color: "black" }}
                disableRipple
                onClick={() => item !== "settings" && navigate(item)}
                onMouseEnter={() => setShow(item)}>
                {item}
              </Button>
            ))}
          </Box>
          {/* Buttons Box */}
          <Box display={{ xs: "none", sm: "none", md: "flex" }} gap={2}>
            <OutlinedButton
              msg={"Login"}
              bgColor={"transparent"}
              color={"#211375"}
              borderColor={"rgb(43, 24, 155)"}
              borderRadius={3}
              px={2}
              py={1}
            />
            <ContainedButton
              msg={"Try for free"}
              // varient={"outlined"}
              bgColor={"rgb(43, 24, 155)"}
              color={"white"}
              borderColor={"rgb(43, 24, 155)"}
              borderRadius={3}
              px={2}
              py={1}
            />
          </Box>
        </Container>
      </Toolbar>
      {show !== null && (
        <Box
          display="flex"
          sx={{
            transition: "background 0.5s ease-in",
            height: 350,
            color: "black",
            borderTop: 1,
            bgcolor: "white"
          }}
          onMouseLeave={() => setShow(null)}>
          <Box flex={"1 1 68%"} bgcolor={""}>
            <Box p={4}>
              <Typography fontWeight={"bold"} fontSize={20}>
                {show !== "price" && "Choose the right Whereby for you"}
                {show === "price" && "Which Whereby product would you like to see pricing for"}
              </Typography>

              <Box display={"flex"} gap={2} mt={4} b>
                <Box
                  display={"flex"}
                  p={4}
                  gap={2}
                  border={"1px solid blue"}
                  borderRadius={3}
                  sx={{ "&:hover": { boxShadow: 4 } }}>
                  <Box component={"img"} src={Embeding} sx={{ width: "40%" }} />
                  <Box>
                    <Typography
                      gutterBottom
                      fontWeight={"bold"}
                      color={"#2B189B"}
                      fontFamily={'"Inter", sans-serif'}>
                      Whereby Embeded
                    </Typography>
                    <Typography gutterBottom paragraph>
                      Integrated real-time video into your Product via our API
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  p={4}
                  gap={2}
                  border={"1px solid blue"}
                  borderRadius={3}
                  sx={{ "&:hover": { boxShadow: 4 } }}>
                  <Box component={"img"} src={VideoCallMeeting} sx={{ width: "40%" }} />
                  <Box>
                    <Typography
                      gutterBottom
                      fontWeight={"bold"}
                      color={"#2B189B"}
                      fontFamily={'"Inter", sans-serif'}>
                      Whereby Embeded
                    </Typography>
                    <Typography gutterBottom paragraph>
                      Integrated real-time video into your Product via our API
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box flex={"1 1 32%"} bgcolor={""} borderLeft={1}>
            <Box p={4}>
              {show === "dashboard" && (
                <>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <ListOutlined />
                    <Button disableRipple>Feature</Button>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <CampaignOutlined />
                    <Button disableRipple>Whats new!</Button>
                  </Box>
                </>
              )}
              {show === "price" && (
                <>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <CalculateOutlined />
                    <Button disableRipple sx={{ color: "black" }}>
                      Rate Calculator
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </AppBar>
  );
};

export default NavBar;
