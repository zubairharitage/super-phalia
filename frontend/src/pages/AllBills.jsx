import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllBillsAction } from "../actions/invoiceAction";
import BillPaper from "../components/BillPaper";
import Loading from "../components/Loading";

const AllBills = () => {
  const dispatch = useDispatch();
  const { loading, error, bills, billCount } = useSelector(
    (state) => state.invoices
  );
  const [reload, setReload] = useState(0);
  useEffect(() => {
    dispatch(getAllBillsAction());
  }, [dispatch, reload]);

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        {loading ? (
          <Loading />
        ) : (
          bills.map((bill) => (
            <BillPaper bill={bill} setReload={setReload} key={bill._id} />
          ))
        )}
      </Container>
      <Footer />
    </>
  );
};

export default AllBills;
