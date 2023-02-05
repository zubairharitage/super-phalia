import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";

const DashboardDataScreen = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Search bills={data} />
      </Container>
      <Footer />
    </>
  );
};

export default DashboardDataScreen;
