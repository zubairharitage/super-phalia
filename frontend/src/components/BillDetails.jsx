import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const BillDetails = ({ bill }) => {
  return (
    <Paper elevation={4} sx={{ mt: "10px" }}>
      <img src="/img.jpg" alt="Super Phalia Image" style={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px",
          borderBottom: "1px dotted black",
        }}
      >
        <Typography>Invoice Number: {bill.invoiceNumber}</Typography>
        <Typography>Date: {bill.date.toString().slice(0, 10)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px",
          borderBottom: "1px dotted black",
        }}
      >
        <Typography>Name: {bill.name}</Typography>
        <Typography>Equipment Type: {bill.equipmentType}</Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Starting Time</TableCell>
              <TableCell>Closing Time</TableCell>
              <TableCell>Job Description</TableCell>
              <TableCell>Trip Hours</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Amount in AED</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>{bill.startingTime}</TableCell>
              <TableCell>{bill.closingTime}</TableCell>
              <TableCell>{bill.jobDescription}</TableCell>
              <TableCell>{bill.tripHours}</TableCell>
              <TableCell>{bill.rate}</TableCell>
              <TableCell>{bill.tripHours * bill.rate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BillDetails;
