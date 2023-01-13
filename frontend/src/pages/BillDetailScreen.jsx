import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BillDetails from "../components/BillDetails";
import { billDetailAction } from "../actions/invoiceAction";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const BillDetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, bill } = useSelector((state) => state.InvoiceDetail);

  useEffect(() => {
    dispatch(billDetailAction(id));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        {loading ? <Loading /> : <BillDetails bill={bill} />}
      </Container>
      <Footer />
    </>
  );
};

export default BillDetailScreen;
