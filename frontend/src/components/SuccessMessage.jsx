import React from "react";
import { Box, Alert, AlertTitle } from "@mui/material";

const SuccessMessage = () => {
  return (
    <Box sx={{ margin: "5px" }}>
      <Alert severity="success">
        <AlertTitle>Created</AlertTitle>
        Invoice Created <strong>Successfully</strong>
      </Alert>
    </Box>
  );
};

export default SuccessMessage;
