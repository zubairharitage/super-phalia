import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllBillsAction } from "../actions/invoiceAction";
import Loading from "../components/Loading";
import Search from "../components/Search";

const UnPaidScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, bills } = useSelector((state) => state.invoices);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    dispatch(getAllBillsAction());
  }, [dispatch, reload]);

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
          <Search
            bills={data.filter((bill) => bill.paid !== true)}
            setReload={setReload}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default UnPaidScreen;
