import React, { useState } from "react";
import { Box, Drawer, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import ResponsiveDrawer from "./ResponsiveDrawer";
import Footer from "./Footer";

const Index = ({ children }) => {
  // const { window } = props;
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navBgColor, setNavBgColor] = useState("transparent");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onScroll = () => {
    // const scrollY = window?.scrollY;
    const scrollY = document.getElementById("layoutBox").scrollTop;

    if (scrollY > 150) setNavBgColor("white");
    else setNavBgColor("transparent");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} navBgColor={navBgColor} />
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            // Better open performance on mobile.
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
          }}>
          <ResponsiveDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>

      <Box
        component="main"
        id="layoutBox"
        onScroll={onScroll}
        sx={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
        {/* <Toolbar /> */}
        {/* <h3>asasdasd</h3> */}
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Index;
