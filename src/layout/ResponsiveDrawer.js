import {
  Box,
  List,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ListItemButton
} from "@mui/material";
import React from "react";

const ResponsiveDrawer = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Whereby
      </Typography>
      <Divider />
      <List>
        {["Dashboard", "Contact", "Settings"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ResponsiveDrawer;
