import React from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader />
    </Box>
  );
};

export default Loading;
