import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllBills } from "../actions/invoiceAction";
import BillPaper from "../components/BillPaper";
import Loading from "../components/Loading";

const AllBills = () => {
  const dispatch = useDispatch();
  const { loading, error, bills, billCount } = useSelector(
    (state) => state.invoices
  );
  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        {loading ? (
          <Loading />
        ) : (
          bills.map((bill) => <BillPaper bill={bill} key={bill._id} />)
        )}
      </Container>
      <Footer />
    </>
  );
};

export default AllBills;
