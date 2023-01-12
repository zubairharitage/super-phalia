import React from "react";
import { Box, Button, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const BillPaper = ({ bill }) => {
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
        <Button color="primary">
          <EditIcon />
        </Button>
        <Button color="error">
          <DeleteForeverIcon />
        </Button>
      </Box>
    </Paper>
  );
};

export default BillPaper;
