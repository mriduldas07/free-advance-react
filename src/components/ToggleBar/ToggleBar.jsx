import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ToggleBar.css";

export default function ToggleBar() {
  const [orders, setOrders] = useState("allOrders");
  return (
    <div className="toggle-bar">
      <ul>
        <Link to={"/seller"}>
          <li
            className={orders === "allOrders" && "active"}
            onClick={() => setOrders("allOrders")}
          >
            All Orders
          </li>
        </Link>
        <Link to={"/seller/regularDelievey"}>
          <li
            className={orders === "regularDelievey" && "active"}
            onClick={() => setOrders("regularDelievey")}
          >
            Regular Delivery
          </li>
        </Link>
        <Link to={"/seller/expressDelievery"}>
          <li
            className={orders === "expressDelievery" && "active"}
            onClick={() => setOrders("expressDelievery")}
          >
            Express Delivery
          </li>
        </Link>
      </ul>
    </div>
  );
}
