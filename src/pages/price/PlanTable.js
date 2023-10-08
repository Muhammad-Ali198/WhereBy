import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";
import Export6 from "../../assets/images/Export6.svg";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-head": {
    backgroundColor: "#000",
    color: "#fff"
  },
  "&.MuiTableCell-body": {
    fontSize: 14
  }
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f2f2f2" // You can replace this with any color you want
  }
});

// --------------------------------------------------------------------------------------------------

const rows = [
  {
    token: "Monthly price per host",
    free: "Free",
    pro: "$6.99",
    business: "$9.99"
  },
  {
    token: "Host",
    free: "1",
    pro: "1",
    business: "3+"
  },
  {
    token: "Rooms",
    free: "1",
    pro: "3",
    business: "Unlimited"
  },
  {
    token: "Meeting capacity",
    free: "100 participants",
    pro: "100 participants",
    business: "200 participants"
  },
  {
    token: "Active videos",
    free: "12",
    pro: "12",
    business: "24"
  },
  {
    token: "Group meeting duration",
    free: "45 mins",
    pro: "Unlimited",
    business: "Unlimited"
  },
  {
    token: "Collaboration tools",
    free: <Check />,
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Screen sharing",
    free: <Check />,
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Hybrid meetings",
    free: <Check />,
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Breakout Groups",
    free: <Check />,
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Background Effects",
    free: <Check />,
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Noise Reduction",
    free: <Check />,
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Custom Branding",
    free: "",
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Local Recording",
    free: "",
    pro: <Check />,
    business: <Check />
  },
  {
    token: "Shared Rooms",
    free: "",
    pro: "",
    business: <Check />
  },
  {
    token: "Flex Rooms",
    free: "",
    pro: "",
    business: <Check />
  },
  {
    token: "Custom waiting room",
    free: "",
    pro: "",
    business: <Check />
  },
  {
    token: "Priority Support",
    free: "",
    pro: "",
    business: <Check />
  }
];

const PlanTable = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }} pb={10}>
        <Typography textAlign={"center"} variant="h4" py={10}>
          Compare plans & features
        </Typography>
        <Box mx={5}>
          <TableContainer component={"div"}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid grey",
                      borderRight: "1px solid grey",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#211375"
                    }}>
                    Free
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid grey",
                      borderRight: "1px solid grey",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#211375"
                    }}>
                    Pro
                  </TableCell>
                  <TableCell sx={{ color: "#211375", fontWeight: "bold", fontSize: 30 }}>
                    Business
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <StyledTableRow key={idx}>
                    <StyledTableCell
                      component={"th"}
                      key={row.token}
                      sx={{ fontWeight: "bold", fontSize: 17 }}>
                      {row.token}
                    </StyledTableCell>
                    <StyledTableCell
                      component={"td"}
                      sx={{ borderLeft: "1px solid grey", borderRight: "1px solid grey" }}
                      key={row.free}>
                      {row.free}
                    </StyledTableCell>
                    <StyledTableCell
                      component={"td"}
                      sx={{ borderLeft: "1px solid grey", borderRight: "1px solid grey" }}
                      key={row.pro}>
                      {row.pro}
                    </StyledTableCell>
                    <StyledTableCell component={"td"} key={row.business}>
                      {row.business}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell sx={{ border: 0 }}></TableCell>
                  <TableCell
                    component={"td"}
                    sx={{
                      borderLeft: "1px solid grey",
                      borderRight: "1px solid grey",
                      textAlign: "center",
                      borderBottom: 0
                    }}>
                    <Button variant="outlined" sx={{ color: "#211375", width: "80%" }}>
                      Get started
                    </Button>
                  </TableCell>
                  <TableCell
                    component={"td"}
                    sx={{
                      borderLeft: "1px solid grey",
                      borderRight: "1px solid grey",
                      textAlign: "center",
                      borderBottom: 0
                    }}>
                    <Button variant="outlined" sx={{ color: "#211375", width: "80%" }}>
                      Get started
                    </Button>
                  </TableCell>
                  <TableCell component={"td"} sx={{ textAlign: "center", borderBottom: 0 }}>
                    <Button variant="contained" sx={{ backgroundColor: "#211375", width: "80%" }}>
                      Try 14 days free
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        py={10}
        bgcolor={"white"}>
        <Typography sx={{ fontSize: "2rem" }} fontFamily={""}>
          Switching from Zoom?
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#211375", display: "flex", alignItems: "center", gap: 1 }}>
          Compare us on
          <img src={Export6} alt="icon" />
        </Button>
      </Box>
    </>
  );
};

export default PlanTable;
