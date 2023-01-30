import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { billEditAction } from "../actions/invoiceAction";

const EditBill = ({ bill }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const [invoice, setInvoice] = useState({
    invoiceNumber: bill.invoiceNumber,
    name: bill.name,
    startingTime: bill.startingTime,
    closingTime: bill.closingTime,
    jobDescription: bill.jobDescription,
    equipmentType: bill.equipmentType,
    tripHours: bill.tripHours,
    rate: bill.rate,
    tax: bill.tax,
    trn: bill.trn,
    left: bill.left,
    discount: bill.discount,
    date: bill.date,
    paid: bill.paid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInvoice((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    dispatch(billEditAction(id, invoice));
    nevigate(`/billdetail/${bill._id}`);
  };
  return (
    <>
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        <Typography
          variant="h5"
          sx={{ margin: "10px", fontWeight: "600", textAlign: "center" }}
        >
          Create Invoice
        </Typography>
        <Box>
          <TextField
            placeholder="Enter Name"
            label="Name"
            name="name"
            value={invoice.name}
            onChange={handleChange}
            sx={{ margin: "5px", width: "48%" }}
          />
          <TextField
            placeholder="Enter Invoice Number"
            label="Invoice Number"
            value={invoice.invoiceNumber}
            onChange={handleChange}
            sx={{ margin: "5px", width: "48%" }}
          />
          <TextField
            placeholder="Enter Starting time"
            label="Starting time"
            name="startingTime"
            value={invoice.startingTime}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <TextField
            placeholder="Enter Closing time"
            label="Closing time"
            name="closingTime"
            value={invoice.closingTime}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <TextField
            placeholder="Enter Job Description"
            label="Job Description"
            name="jobDescription"
            value={invoice.jobDescription}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <TextField
            placeholder="Enter Equipment Type"
            label="Equipment Type"
            name="equipmentType"
            value={invoice.equipmentType}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <TextField
            placeholder="Enter Trip Hours"
            label="Trip Hours"
            name="tripHours"
            value={invoice.tripHours}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <TextField
            placeholder="Enter Rate"
            label="Rate"
            name="rate"
            value={invoice.rate}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <FormControl sx={{ width: "48%", margin: "5px" }}>
            <InputLabel id="simple-select-label">Tax</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              label="paid"
              value={invoice.tax}
              onChange={handleChange}
              name="tax"
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={5}>Yes</MenuItem>
            </Select>
          </FormControl>
          <TextField
            placeholder="Enter Customer TRN"
            label="TRN"
            name="trn"
            value={invoice.trn}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />

          <TextField
            placeholder="Enter discount for cst"
            label="Discount"
            name="discount"
            value={invoice.discount}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <TextField
            placeholder="Enter Date"
            label="Date"
            name="date"
            value={invoice.date}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <FormControl sx={{ width: "48%", margin: "5px" }}>
            <InputLabel id="demo-simple-select-label">select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="paid"
              value={invoice.paid}
              onChange={handleChange}
              name="paid"
            >
              <MenuItem value={true}>paid</MenuItem>
              <MenuItem value={false}>unpaid</MenuItem>
            </Select>
          </FormControl>
          {!invoice.paid ? (
            <TextField
              placeholder="Enter how much Left"
              label="Left"
              name="left"
              value={invoice.left}
              onChange={handleChange}
              sx={{ width: "48%", margin: "5px" }}
            />
          ) : (
            <Box></Box>
          )}
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              width: "48%",
              margin: "5px",
              backgroundColor: "#0081C9",
              ":hover": { backgroundColor: "#05a5fb" },
            }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default EditBill;
