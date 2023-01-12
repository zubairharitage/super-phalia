import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllBillsAction } from "../actions/invoiceAction";
import BillPaper from "../components/BillPaper";
import Loading from "../components/Loading";

const PaidScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, bills, billCount } = useSelector(
    (state) => state.invoices
  );
  const [reload, setReload] = useState(0);
  useEffect(() => {
    dispatch(getAllBillsAction());
  }, [dispatch, reload]);

  const paidBills = bills.filter((bill) => bill.paid === true);
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        {loading ? (
          <Loading />
        ) : (
          paidBills.map((bill) => (
            <BillPaper bill={bill} setReload={setReload} key={bill._id} />
          ))
        )}
      </Container>
      <Footer />
    </>
  );
};

export default PaidScreen;
