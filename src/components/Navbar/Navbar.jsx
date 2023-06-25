import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [buyerOrSeller, setBuyerOrSeller] = useState("buyer");
  return (
    <div className="navbar">
      <div className="left-side">
        <h2>devGlasses</h2>
      </div>
      <div className="right-side">
        <ul>
          <Link to={"/seller"} onClick={() => setBuyerOrSeller("seller")}>
            <li className={`${buyerOrSeller === "seller" && "active"}`}>
              Seller
            </li>
          </Link>
          <Link to={"/"} onClick={() => setBuyerOrSeller("buyer")}>
            <li className={`${buyerOrSeller === "buyer" && "active"}`}>
              Buyer
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
