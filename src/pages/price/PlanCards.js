import { Check, Person } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const cardFeature1 = [
  "1 room",
  "100 attendees per meeting",
  "Unlimited one-on-one meetings",
  "Group meetings for ups to 45 minutes"
];

const cardFeature2 = [
  "3 rooms",
  "No time limit on group meetings",
  "Unlimited recording",
  "Custom branding"
];
const cardFeature3 = [
  "Unlimited rooms",
  "200 attendees per meetings",
  "Shared and Flex rooms",
  "Custom subdomain"
];

const PlanCards = () => {
  return (
    <Container maxWidth={"lg"}>
      <Box bgcolor={""}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={4} lg={4}>
            <Paper sx={{ width: "100%", borderRadius: 4 }} elevation={6}>
              <Box p={2}>
                <Typography variant="h5" color={"#211375"}>
                  Free
                </Typography>
                <Typography variant="p">For Getting Started</Typography>
              </Box>
              <Divider />
              <Box p={2}>
                <Typography variant="h4" mb={"5px"}>
                  Free
                </Typography>
                <Typography variant="p" display={"flex"} gap={1}>
                  <Person />1 host
                </Typography>
              </Box>
              <Divider />
              <Box p={2} mb={5}>
                <Typography fontWeight={"bold"} mb={2}>
                  Free, forever
                </Typography>
                {cardFeature1.map((itm, idx) => (
                  <Typography display={"flex"} gap={1} mb={1} key={idx}>
                    <Check /> {itm}
                  </Typography>
                ))}
              </Box>
              <Box display={"flex"} justifyContent={"center"} p={1}>
                <Button variant="outlined" sx={{ color: "#211375", px: "6rem", py: "10px" }}>
                  Get started
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4} bgcolor={""}>
            <Paper sx={{ width: "100%", borderRadius: 4 }} elevation={6}>
              <Box p={2}>
                <Typography variant="h5" color={"#211375"}>
                  Pro
                </Typography>
                <Typography variant="p">For professional individuals</Typography>
              </Box>
              <Divider />
              <Box p={2}>
                <Typography variant="h4" mb={"5px"}>
                  $6.99
                </Typography>
                <Typography variant="p" display={"flex"} gap={1}>
                  <Person />1 host
                </Typography>
              </Box>
              <Divider />
              <Box p={2} mb={5}>
                <Typography fontWeight={"bold"} mb={2}>
                  Everthing in Free, plus:
                </Typography>
                {cardFeature2.map((itm, idx) => (
                  <Typography display={"flex"} gap={1} mb={1} key={idx}>
                    <Check color={"#211375"} /> {itm}
                  </Typography>
                ))}
              </Box>
              <Box display={"flex"} justifyContent={"center"} p={1}>
                <Button variant="outlined" sx={{ color: "#211375", px: "6rem", py: "10px" }}>
                  Get started
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4} bgcolor={""}>
            <Paper sx={{ width: "100%", borderRadius: 4 }} elevation={6}>
              <Box p={2}>
                <Typography variant="h5" color={"#211375"}>
                  Business
                </Typography>
                <Typography variant="p">For collaborating teams</Typography>
              </Box>
              <Divider />
              <Box p={2}>
                <Typography variant="h4" mb={"5px"}>
                  $9.99
                </Typography>
                <Typography variant="p" display={"flex"} gap={1}>
                  <Person />3 and more hosts
                </Typography>
              </Box>
              <Divider />
              <Box p={2} mb={5}>
                <Typography fontWeight={"bold"} mb={2}>
                  Everthing in Pro, plus:
                </Typography>
                {cardFeature3.map((itm, idx) => (
                  <Typography display={"flex"} gap={1} mb={1} key={idx}>
                    <Check color={"#211375"} /> {itm}
                  </Typography>
                ))}
              </Box>
              <Box display={"flex"} justifyContent={"center"} p={1}>
                <Button
                  variant="contained"
                  sx={{
                    width: "90%",
                    backgroundColor: "#211375",
                    px: "6rem",
                    py: "10px",
                    whiteSpace: "nowrap"
                  }}>
                  Try 14 days free
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Typography textAlign={"center"} my={3}>
        *All prices are in USD, excl. VAT
      </Typography>
    </Container>
  );
};

export default PlanCards;
