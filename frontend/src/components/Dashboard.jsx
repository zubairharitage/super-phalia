import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import DashboardCard from "./DashboardCard";

const Dashboard = ({ bills }) => {
  const [value, setValue] = useState(dayjs("01-01-2022"));
  const filterByYear = bills.filter((bill) =>
    bill.date.includes(`${value.$y}`)
  );
  const data = filterByYear.filter((bill) =>
    bill.date.slice(2, 4).includes(`${value.$M + 1}`)
  );

  // for total bills in months
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

  // for paid bills in month
  const dataOfPaid = data.filter((val) => val.paid === true);
  const funcForPaid = (sum, bill) => {
    const b = bill.tripHours * bill.rate;
    const tax = b * 0.05;
    const bil = bill.tax === 5 ? b + tax : b;
    sum += bil;
    return sum;
  };
  const totalBilForPaid = dataOfPaid.reduce(funcForPaid, 0);
  const discountForPaid = dataOfPaid.reduce((sum, d) => sum + d.discount, 0);
  const totalAmountForPaid = totalBilForPaid - discountForPaid;

  // for unpaid bills in month
  const dataOfUnPaid = data.filter((val) => val.paid === false);
  const funcForUnPaid = (sum, bill) => {
    const b = bill.tripHours * bill.rate;
    const tax = b * 0.05;
    const bil = bill.tax === 5 ? b + tax : b;
    sum += bil;
    return sum;
  };
  const totalBilForUnPaid = dataOfUnPaid.reduce(funcForUnPaid, 0);
  const discountForUnPaid = dataOfUnPaid.reduce(
    (sum, d) => sum + d.discount,
    0
  );
  const totalAmountForUnPaid = totalBilForUnPaid - discountForUnPaid;

  // for total bills in Year
  const funcYear = (sum, bill) => {
    const b = bill.tripHours * bill.rate;
    const tax = b * 0.05;
    const bil = bill.tax === 5 ? b + tax : b;
    sum += bil;
    return sum;
  };
  const totalBilYear = filterByYear.reduce(funcYear, 0);
  const discountYear = filterByYear.reduce((sum, d) => sum + d.discount, 0);
  const totalAmountYear = totalBilYear - discountYear;

  // for paid bills in Year
  const dataOfPaidYear = filterByYear.filter((val) => val.paid === true);
  const funcForPaidYear = (sum, bill) => {
    const b = bill.tripHours * bill.rate;
    const tax = b * 0.05;
    const bil = bill.tax === 5 ? b + tax : b;
    sum += bil;
    return sum;
  };
  const totalBilForPaidYear = dataOfPaidYear.reduce(funcForPaidYear, 0);
  const discountForPaidYear = dataOfPaidYear.reduce(
    (sum, d) => sum + d.discount,
    0
  );
  const totalAmountForPaidYear = totalBilForPaidYear - discountForPaidYear;

  // for unpaid bills in Year
  const dataOfUnPaidYear = filterByYear.filter((val) => val.paid === false);
  const funcForUnPaidYear = (sum, bill) => {
    const b = bill.tripHours * bill.rate;
    const tax = b * 0.05;
    const bil = bill.tax === 5 ? b + tax : b;
    sum += bil;
    return sum;
  };
  const totalBilForUnPaidYear = dataOfUnPaidYear.reduce(funcForUnPaidYear, 0);
  const discountForUnPaidYear = dataOfUnPaidYear.reduce(
    (sum, d) => sum + d.discount,
    0
  );
  const totalAmountForUnPaidYear =
    totalBilForUnPaidYear - discountForUnPaidYear;

  return (
    <Box
      sx={{
        margin: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      <Typography variant="h6" component={"h3"}>
        Stats of Selected Month
      </Typography>
      <DashboardCard
        title={{ t1: "Total Bills", t2: "Total Income" }}
        values={{ v1: data.length, v2: totalAmount }}
      />
      <DashboardCard
        title={{ t1: "Paid Bills", t2: "Recieved" }}
        values={{ v1: dataOfPaid.length, v2: totalAmountForPaid }}
      />
      <DashboardCard
        title={{ t1: "UnPaid Bills", t2: "Pending" }}
        values={{ v1: dataOfUnPaid.length, v2: totalAmountForUnPaid }}
      />
      <Typography variant="h6" component={"h3"}>
        Stats of Selected Year
      </Typography>
      <DashboardCard
        title={{ t1: "Total Bills", t2: "Total Income" }}
        values={{ v1: filterByYear.length, v2: totalAmountYear }}
      />
      <DashboardCard
        title={{ t1: "Paid Bills", t2: "Recieved" }}
        values={{ v1: dataOfPaidYear.length, v2: totalAmountForPaidYear }}
      />
      <DashboardCard
        title={{ t1: "UnPaid Bills", t2: "Pending" }}
        values={{ v1: dataOfUnPaidYear.length, v2: totalAmountForUnPaidYear }}
      />
    </Box>
  );
};

export default Dashboard;
