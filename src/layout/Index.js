import React, { useState } from "react";
import { Box, Drawer, Toolbar, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import ResponsiveDrawer from "./ResponsiveDrawer";

const Index = ({ children }) => {
  // const { window } = props;
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
          }}>
          <ResponsiveDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 2, background: "pink", width: "100vw", height: "100vh" }}>
        <Toolbar />
        <h3>asasdasd</h3>
        {children}
      </Box>
    </Box>
  );
};

export default Index;
