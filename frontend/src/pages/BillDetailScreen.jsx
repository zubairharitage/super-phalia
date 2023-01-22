import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BillDetails from "../components/BillDetails";
import { billDetailAction, getAllBillsAction } from "../actions/invoiceAction";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const BillDetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { bills } = useSelector((state) => state.invoices);
  const { error, bill } = useSelector((state) => state.InvoiceDetail);

  useEffect(() => {
    dispatch(getAllBillsAction());
    dispatch(billDetailAction(id));
  }, [dispatch]);
  let loading = true;
  let data;
  if (bills.length !== 0 && bill) {
    loading = false;
    data = bills.filter((b) => b.invoiceNumber === bill.invoiceNumber);
  }

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        {loading ? <Loading /> : <BillDetails bill={data} />}
      </Container>
      <Footer />
    </>
  );
};

export default BillDetailScreen;
