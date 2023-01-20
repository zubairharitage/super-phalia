import React, { useState } from "react";
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
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { billEditAction } from "../actions/invoiceAction";

const BillDetails = ({ bill }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.editInvoice);

  const [billl, setBilll] = useState(bill);
  const [reload, setReload] = useState(false);

  const amountAED = billl.tripHours * billl.rate;
  let vat;
  if (billl.tax === 0) {
    vat = amountAED * 0;
  }
  if (billl.tax === 5) {
    vat = amountAED * 0.05;
  }
  const discount = billl.discount;
  const totalBill = amountAED + vat - discount;
  const handleClick = () => {
    const bil = {
      paid: true,
      cstPay: totalBill,
    };
    dispatch(billEditAction(id, bil));
    setReload(true);
  };
  const handleReload = () => {
    setBilll(data);
  };
  return (
    <Box>
      {!billl.paid && (
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            margin: "10px",
          }}
        >
          <Typography>{reload ? "" : "Bill is Not Paid"}</Typography>
          {reload ? (
            <Button
              onClick={handleReload}
              variant="contained"
              sx={{
                backgroundColor: "#0081C9",
                ":hover": { backgroundColor: "#05a5fb" },
              }}
            >
              Reload
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "#0081C9",
                ":hover": { backgroundColor: "#05a5fb" },
              }}
            >
              Click for Paid
            </Button>
          )}
        </Paper>
      )}
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
            <Typography
              component="p"
              variant="body1"
              sx={{ fontWeight: "bold" }}
            >
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
          <Typography>No. {billl.invoiceNumber}</Typography>
          <Typography>{billl.paid && "Paid"}</Typography>
          <Typography>Date: {billl.date}</Typography>
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
          <Typography>Company Name: {billl.name}</Typography>
          <Typography>Equipment Type: {billl.equipmentType}</Typography>
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
                  {billl.startingTime}
                </TableCell>
                <TableCell sx={{ border: "2px solid black" }}>
                  {billl.closingTime}
                </TableCell>
                <TableCell sx={{ border: "2px solid black" }}>
                  {billl.jobDescription}
                </TableCell>
                <TableCell sx={{ border: "2px solid black" }}>
                  {billl.tripHours}
                </TableCell>
                <TableCell sx={{ border: "2px solid black" }}>
                  {billl.rate}
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
          <Typography>{billl.cstPay}</Typography>
        </Box>
        {!billl.paid && (
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
            <Typography>{totalBill - billl.cstPay}</Typography>
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
    </Box>
  );
};

export default BillDetails;
