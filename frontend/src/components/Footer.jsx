import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        bottom: 0,
        textAlign: "center",
        marginTop: "15px",
        padding: "15px 0",
        backgroundColor: "#0081C9",
        color: "white",
      }}
    >
      Copywrite &copy; 2023
    </Box>
  );
};

export default Footer;
