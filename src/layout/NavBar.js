import React from "react";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { NavIcon } from "../assets/AssetsExport";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { ContainedButton, OutlinedButton } from "../components/ComponentExporter";

const NavBar = ({ handleDrawerToggle, navBgColor }) => {
  const navigate = useNavigate();

  return (
    <AppBar
      elevation={navBgColor == "transparent" ? 0 : 1}
      sx={{ background: navBgColor, transition: "background .5s ease-in" }}
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
                onClick={() => navigate(item)}>
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
              borderColor={"#211375"}
              borderRadius={3}
            />
            <ContainedButton
              msg={"Try for free"}
              // varient={"outlined"}
              bgColor={"#211375"}
              color={"white"}
              borderColor={"#211375"}
              borderRadius={3}
            />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
