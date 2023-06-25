import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllOrders from "./components/AllOrders/AllOrders";
import ExpressDelievery from "./components/ExpressDelievery/ExpressDelievery";
import Navbar from "./components/Navbar/Navbar";
import RegularDelievery from "./components/RegularDelievey/RegularDelievery";
import Buyer from "./pages/Buyer/Buyer";
import BuyerDetails from "./pages/BuyerDetails/BuyerDetails";
import Seller from "./pages/Seller/Seller";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Buyer />} />
        <Route path="/buyerDetails/:productId" element={<BuyerDetails />} />
        <Route path="/seller" element={<Seller />}>
          <Route index element={<AllOrders />} />
          <Route path="regularDelievey" element={<RegularDelievery />} />
          <Route path="expressDelievery" element={<ExpressDelievery />} />
        </Route>
      </Routes>
    </div>
  );
}

// http://localhost:5000/customers?shipment-status=regular&&_expand=product
