import React, { useState } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BillPaper from "./BillPaper";

const Search = ({ bills, setReload }) => {
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

  return (
    <>
      <Box>
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
        {data.map((bill) => (
          <BillPaper bill={bill} setReload={setReload} key={bill._id} />
        ))}
      </Box>
    </>
  );
};

export default Search;
