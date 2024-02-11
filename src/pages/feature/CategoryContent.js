import { AddBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import React from "react";
// import { Element } from "react-scroll";

const CategoryContent = () => {
  return (
    <Box width={"100%"}>
      {gridTest.map((itm) => (
        // <Element key={itm.name} id={itm.name} name={itm.name}>
        <>
          <Typography
            id={itm.name} //Id added to locate that element
            variant="h3"
            fontWeight={"bold"}
            fontFamily={"Custom-Roslinda"}
            gutterBottom>
            {itm.name}
          </Typography>
          <Typography paragraph gutterBottom>
            Enjoy beautiful, simple video meetings with features that delight every time.
          </Typography>
          <Divider />

          <Box pt={2}>
            <Grid container spacing={3}>
              {itm.times.map((time) => (
                <Grid bgcolor={""} item xs={12} md={6} key={time}>
                  <Card sx={{ boxShadow: "none", p: 2 }}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        display={"flex"}
                        alignItems={"center"}>
                        <AddBox />
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" size="small" sx={{ color: "blueviolet" }}>
                        Share
                      </Button>
                      <Button variant="outlined" size="small" sx={{ color: "green" }}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider sx={{ my: 6 }} />
          {/* </Element> */}
        </>
      ))}
    </Box>
  );
};

export default CategoryContent;

const gridTest = [
  { name: "Engagement", times: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Customization", times: [1, 2, 3, 4, 5] },
  { name: "Collaboration", times: [1, 2, 3, 4] },
  { name: "Analytics & Insights", times: [1, 2, 3, 4, 5] },
  { name: "Integrations & Extensibility", times: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Room Management & Controls", times: [1, 2, 3, 4] },
  { name: "Privacy & Security", times: [1, 2, 3, 4, 5] },
  { name: "Scale & Reliability", times: [1, 2, 3, 4] },
  { name: "Compatibility", times: [1, 2, 3, 4, 5, 6, 7] }
];
