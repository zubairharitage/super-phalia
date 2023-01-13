import React from "react";
import { Box, Button, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteBillAction } from "../actions/invoiceAction";

const BillPaper = ({ bill, setReload }) => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBillAction(id));
    setReload(Math.random());
  };
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
        <Button color="primary">
          <EditIcon />
        </Button>
        <Button color="error" onClick={() => handleDelete(bill._id)}>
          <DeleteForeverIcon />
        </Button>
      </Box>
    </Paper>
  );
};

export default BillPaper;
