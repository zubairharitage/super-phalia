import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AllBills from "./pages/AllBills";
import PaidScreen from "./pages/PaidScreen";
import UnPaidScreen from "./pages/UnPaidScreen";
import BillDetailScreen from "./pages/BillDetailScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllBills />} />
        <Route path="/paid" element={<PaidScreen />} />
        <Route path="/unpaid" element={<UnPaidScreen />} />
        <Route path="/billdetail/:id" element={<BillDetailScreen />} />
      </Routes>
    </>
  );
}

export default App;
