import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllBills } from "../actions/invoiceAction";

const AllBills = () => {
  const dispatch = useDispatch();
  const { loading, error, bills, billsCount } = useSelector(
    (state) => state.invoices
  );
  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>AllBills {loading ? "loading" : bills.map((bill) => bill.name)}</div>
      <Footer />
    </>
  );
};

export default AllBills;
