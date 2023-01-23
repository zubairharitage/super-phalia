import React, { useState } from "react";
import html2canvas from "html2canvas";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";

import { billEditAction, deleteBillAction } from "../actions/invoiceAction";

const BillDetails = ({ bill }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const { data } = useSelector((state) => state.editInvoice);

  const [billl, setBilll] = useState(bill[0]);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);

  let discount;
  let vat;
  let totalBill;

  try {
    const totalBil = bill.reduce((sum, b) => sum + b.tripHours * b.rate, 0);
    discount = bill.reduce((sum, d) => sum + d.discount, 0);
    vat = (totalBil * billl.tax) / 100;
    totalBill = totalBil + vat - discount;
  } catch (err) {
    window.location.reload(false);
  }

  const handleClick = () => {
    const bil = {
      paid: true,
      left: 0,
    };
    dispatch(billEditAction(id, bil));
    setReload(true);
  };
  const handleReload = () => {
    setBilll(data);
  };
  const handleDelete = (bill) => {
    bill.map((b) => dispatch(deleteBillAction(b._id)));
    nevigate(`/`);
  };
  const handleAddBill = () => {
    nevigate(`/addbill/${id}`);
  };
  const handleDownload = async () => {
    const element = document.getElementById("billPaper"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = `${billl.name}-${billl.invoiceNumber}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          margin: "5px 0",
          backgroundColor: "#0081C9",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddBill}
          sx={{
            backgroundColor: "#0081C9",
            ":hover": { backgroundColor: "#05a5fb" },
          }}
        >
          Add Bill
        </Button>
        <Button
          variant="contained"
          size="small"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          sx={{
            backgroundColor: "#0081C9",
            mr: "2px",
            ":hover": { backgroundColor: "#05a5fb" },
          }}
        >
          Download
        </Button>

        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#0081C9",
            ":hover": { backgroundColor: "#05a5fb" },
          }}
        >
          Delete Bill
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you Sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={() => handleDelete(bill)} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
      {!billl.paid && (
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            margin: "5px 0",
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
        id="billPaper"
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
              {bill.map((b, index) => (
                <TableRow sx={{ border: "2px solid black" }} key={b._id}>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {b.startingTime}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {b.closingTime}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {b.jobDescription}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {b.tripHours}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {b.rate}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {b.tripHours * b.rate}
                  </TableCell>
                </TableRow>
              ))}
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
            <Typography>{billl.left === 0 ? totalBill : billl.left}</Typography>
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
