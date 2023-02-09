import React, { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BillPaper from "./BillPaper";
import { useNavigate } from "react-router-dom";

const Search = ({ bills }) => {
  const nevigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [searchInvoice, setSearchInvoice] = useState("");

  const data = bills.filter(
    (bill) =>
      bill.invoiceNumber.toString().includes(searchInvoice) &&
      bill.name.toLowerCase().includes(searchName)
  );

  const handleChangeName = (e) => {
    setSearchName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setSearchInvoice(e.target.value);
  };
  const handleBack = () => {
    nevigate(-1);
  };

  return (
    <>
      <Box sx={{ width: "50%" }}>
        <TextField
          placeholder="Name..."
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          value={searchName}
          onChange={handleChangeName}
          sx={{ margin: "10px", width: "46%" }}
        />
        <TextField
          placeholder="Invoice number..."
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          value={searchInvoice}
          onChange={handleChangeNumber}
          sx={{ margin: "10px", width: "46%" }}
        />
        <Button
          variant="contained"
          onClick={handleBack}
          sx={{
            backgroundColor: "#0081C9",
            marginLeft: "8px",
            border: `1px solid #0081C9`,
            ":hover": {
              boxShadow: `0px 4px 8px rgba(38, 38, 38, 0.2)`,
              backgroundColor: "#c9e4fe",
              color: "black",
              border: `1px solid #cccccc`,
            },
          }}
        >
          Back
        </Button>
      </Box>
      <Box>
        {data.map((bill) => (
          <BillPaper bill={bill} key={bill._id} />
        ))}
      </Box>
    </>
  );
};

export default Search;
