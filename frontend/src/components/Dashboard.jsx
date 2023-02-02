import React, { useState } from "react";
import { Box, Card, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Dashboard = ({ bills }) => {
  const [value, setValue] = useState(dayjs("01-01-2022"));
  const filterByYear = bills.filter((bill) =>
    bill.date.includes(`${value.$y}`)
  );
  const data = filterByYear.filter((bill) =>
    bill.date.slice(1, 5).includes(`${value.$M + 1}`)
  );
  const func = (sum, bill) => {
    const b = bill.tripHours * bill.rate;
    const tax = b * 0.05;
    const bil = bill.tax === 5 ? b + tax : b;
    sum += bil;
    return sum;
  };
  const totalBil = data.reduce(func, 0);
  const discount = data.reduce((sum, d) => sum + d.discount, 0);
  const totalAmount = totalBil - discount;
  return (
    <Box sx={{ margin: "15px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          openTo="year"
          views={["year", "month"]}
          label="Year and Month"
          minDate={dayjs("01-01-2022")}
          maxDate={dayjs("12-12-2033")}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
      <Box sx={{ display: "flex", margin: "10px" }}>
        <Card
          sx={{
            width: "40%",
            backgroundColor: "#0081C9",
            color: "white",
            padding: "5px",
            marginRight: "5px",
          }}
        >
          <Typography>Total Bills</Typography>
          <Typography
            variant="h4"
            component={"h3"}
            sx={{ textAlign: "center" }}
          >
            {data.length}
          </Typography>
        </Card>
        <Card
          sx={{
            width: "40%",
            backgroundColor: "#0081C9",
            color: "white",
            padding: "5px",
          }}
        >
          <Typography>Total Balance</Typography>
          <Typography
            variant="h4"
            component={"h3"}
            sx={{ textAlign: "center" }}
          >
            {totalAmount}
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
