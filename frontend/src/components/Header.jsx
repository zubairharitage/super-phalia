import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0081C9",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer", color: "white" }}
          variant={"h5"}
          component="h4"
        >
          SUPER PHALIA
        </Typography>
      </Link>
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{ mr: "3px", color: "white", fontWeight: "600" }}>
            Home
          </Button>
        </Link>
        <Link to="/all" style={{ textDecoration: "none" }}>
          <Button sx={{ mr: "3px", color: "white", fontWeight: "600" }}>
            All Bills
          </Button>
        </Link>
        <Link to="/paid" style={{ textDecoration: "none" }}>
          <Button sx={{ mr: "3px", color: "white", fontWeight: "600" }}>
            Paid
          </Button>
        </Link>
        <Link to="/unpaid" style={{ textDecoration: "none" }}>
          <Button sx={{ mr: "3px", color: "white", fontWeight: "600" }}>
            UnPaid
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
