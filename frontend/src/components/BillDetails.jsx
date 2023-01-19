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
  const amountAED = bill.tripHours * bill.rate;
  let vat;
  if (bill.tax === 0) {
    vat = amountAED * 0;
  }
  if (bill.tax === 5) {
    vat = amountAED * 0.05;
  }
  const discount = bill.discount;
  const totalBill = amountAED + vat - discount;
  return (
    <Paper
      elevation={4}
      sx={{ mt: "10px", padding: "5px", width: "100%", overflow: "hidden" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h4" sx={{ fontWeight: "bold" }}>
          SUPER PHALIA
        </Typography>
        <Typography component="p" variant="body2">
          TRANSPORT BY HEAVY TRUCKS I.I.C
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography component="h2" variant="h6" sx={{ fontWeight: "bold" }}>
          MR. ARIF OR ATIF
        </Typography>
        <Typography component="p" variant="body1">
          MOB: 050-5837940/055-9910062/052-4723299
        </Typography>
        <Typography
          component="p"
          variant="body2"
          sx={{
            border: "1px solid black",
            display: "inline-block",
            padding: "2px",
          }}
        >
          PLEASE ISSUE CHEQUE IN A/C OF MR. ARIF OR ATIF ALI
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Typography component="p" variant="body1" sx={{ fontWeight: "bold" }}>
            TAX INVOICE
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ borderTop: "2px solid black", display: "inline-block" }}
          >
            TRN: 100594171900003
          </Typography>
        </Box>
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
        <Typography>No. {bill.invoiceNumber}</Typography>
        <Typography>{bill.paid && "Paid"}</Typography>
        <Typography>Date: {bill.date}</Typography>
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
        <Typography>Company Name: {bill.name}</Typography>
        <Typography>Equipment Type: {bill.equipmentType}</Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "gray" }}>
            <TableRow sx={{ border: "2px solid black" }}>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Sr. No.
              </TableCell>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Starting Time
              </TableCell>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Closing Time
              </TableCell>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Job Description
              </TableCell>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Trip Hours
              </TableCell>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Rate
              </TableCell>
              <TableCell sx={{ color: "white", border: "2px solid black" }}>
                Amount in AED
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ border: "2px solid black" }}>
              <TableCell sx={{ border: "2px solid black" }}>1</TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {bill.startingTime}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {bill.closingTime}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {bill.jobDescription}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {bill.tripHours}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {bill.rate}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {amountAED}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px",
          borderBottom: "1px dotted black",
        }}
      >
        <Typography>VAT 5%</Typography>
        <Typography>{vat}</Typography>
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
        <Typography>Discount</Typography>
        <Typography>{discount}</Typography>
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
        <Typography>Total Bill</Typography>
        <Typography>{totalBill}</Typography>
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
        <Typography>Paid</Typography>
        <Typography>{bill.cstPay}</Typography>
      </Box>
      {!bill.paid && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "15px",
            borderBottom: "1px dotted black",
          }}
        >
          <Typography>Left</Typography>
          <Typography>{totalBill - bill.cstPay}</Typography>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Typography
          variant="body2"
          component="p"
          sx={{
            display: "inline-block",
            borderBottom: "1px solid black",
            width: "40%",
            fontWeight: "bold",
          }}
        >
          Driver Name:
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            display: "inline-block",
            borderBottom: "1px solid black",
            width: "45%",
            fontWeight: "bold",
          }}
        >
          Hirer's Signature:
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "15px",
        }}
      >
        <Typography
          variant="body2"
          component="p"
          sx={{
            display: "inline-block",
            borderBottom: "1px solid black",
            width: "40%",
            fontWeight: "bold",
          }}
        >
          Signature:
        </Typography>
      </Box>
    </Paper>
  );
};

export default BillDetails;
