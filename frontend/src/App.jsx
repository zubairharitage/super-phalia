import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AllBills from "./pages/AllBills";
import PaidScreen from "./pages/PaidScreen";
import UnPaidScreen from "./pages/UnPaidScreen";
import BillDetailScreen from "./pages/BillDetailScreen";
import CreateBillScreen from "./pages/CreateBillScreen";
import EditBillScreen from "./pages/EditBillScreen";
import DashboardScreen from "./pages/DashboardScreen";
import PrintBillScreen from "./pages/PrintBillScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllBills />} />
        <Route path="/paid" element={<PaidScreen />} />
        <Route path="/unpaid" element={<UnPaidScreen />} />
        <Route path="/billdetail/:id" element={<BillDetailScreen />} />
        <Route path="/printbill/:id" element={<PrintBillScreen />} />
        <Route path="/addbill/:id" element={<CreateBillScreen />} />
        <Route path="/editbill/:id" element={<EditBillScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </>
  );
}

export default App;
