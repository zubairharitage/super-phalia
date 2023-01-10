import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    name: "",
    startingTime: "",
    closingTime: "",
    jobDescription: "",
    equipmentType: "",
    tripHours: "",
    rate: "",
    tax: "",
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

  return (
    <div>
      <Header />
      <Container maxWidth="sm" sx={{ marginBottom: "40px" }}>
        <Typography
          variant="h5"
          sx={{ margin: "10px", fontWeight: "600", textAlign: "center" }}
        >
          Create Invoice
        </Typography>
        <Box>
          <TextField
            placeholder="Enter Invoice Number"
            label="Invoice Number"
            name="invoiceNumber"
            value={invoice.invoiceNumber}
            onChange={handleChange}
            sx={{ margin: "5px", width: "48%" }}
          />
          <TextField
            placeholder="Enter Name"
            label="Name"
            name="name"
            value={invoice.name}
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
          <TextField
            placeholder="Enter Tax"
            label="Tax"
            name="tax"
            value={invoice.tax}
            onChange={handleChange}
            sx={{ width: "48%", margin: "5px" }}
          />
          <Button
            variant="contained"
            sx={{
              width: "48%",
              margin: "5px",
              backgroundColor: "#0081C9",
              ":hover": { backgroundColor: "#05a5fb" },
            }}
          >
            Create Invoice
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
