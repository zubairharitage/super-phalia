import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllBillsAction } from "../actions/invoiceAction";
import Loading from "../components/Loading";
import Search from "../components/Search";

const PaidScreen = () => {
  const dispatch = useDispatch();
  const { loading, bills } = useSelector((state) => state.invoices);
  useEffect(() => {
    dispatch(getAllBillsAction());
  }, [dispatch]);

  let data;
  if (!loading) {
    data = [...new Map(bills.map((b) => [b.invoiceNumber, b])).values()];
  }

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        {loading ? (
          <Loading />
        ) : (
          <Search bills={data.filter((bill) => bill.paid === true)} />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default PaidScreen;
