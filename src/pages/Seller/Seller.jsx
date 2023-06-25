import React from "react";
import { Outlet } from "react-router-dom";
import ToggleBar from "../../components/ToggleBar/ToggleBar";
import "./Seller.css";

export default function Seller() {
  return (
    <div>
      <ToggleBar />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
