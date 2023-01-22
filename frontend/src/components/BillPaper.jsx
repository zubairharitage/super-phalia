import React from "react";
import { Box, Button, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const BillPaper = ({ bill }) => {
  const nevigate = useNavigate();

  const handleView = () => {
    nevigate(`/billdetail/${bill._id}`);
  };
  return (
    <Paper
      elevation={4}
      sx={{
        padding: "15px",
        margin: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "skyblue",
        borderRight: `5px solid ${bill.paid ? "green" : "red"}`,
      }}
    >
      <Box>{bill.invoiceNumber}</Box>
      <Box>{bill.name}</Box>
      <Box>
        <Button color="success" onClick={handleView}>
          <VisibilityIcon />
        </Button>
      </Box>
    </Paper>
  );
};

export default BillPaper;
