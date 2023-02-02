import { Box, Card, Typography } from "@mui/material";
import React from "react";

const DashboardCard = ({ title, values }) => {
  return (
    <Box sx={{ display: "flex", margin: "10px", width: "100%" }}>
      <Card
        sx={{
          width: "30%",
          backgroundColor: "#0081C9",
          color: "white",
          padding: "5px",
          marginRight: "5px",
        }}
      >
        <Typography>{title.t1}</Typography>
        <Typography variant="h4" component={"h3"} sx={{ textAlign: "center" }}>
          {values.v1}
        </Typography>
      </Card>
      <Card
        sx={{
          width: "50%",
          backgroundColor: "#0081C9",
          color: "white",
          padding: "5px",
        }}
      >
        <Typography>{title.t2}</Typography>
        <Typography variant="h4" component={"h3"} sx={{ textAlign: "center" }}>
          {values.v2}
        </Typography>
      </Card>
    </Box>
  );
};

export default DashboardCard;
