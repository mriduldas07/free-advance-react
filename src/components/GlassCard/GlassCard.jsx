import React from "react";
import { useNavigate } from "react-router-dom";
import "./GlassCard.css";

export default function GlassCard({ data }) {
  const navigate = useNavigate();
  const { img, name, price, id } = data || {};
  return (
    <div className="glass-card">
      <div className="img-section">
        <img src={img} alt="" />
      </div>
      <div className="details-section">
        <h3>{name}</h3>
        <p>price : {price} TK</p>
        <span onClick={() => navigate(`/buyerDetails/${id}`)}>
          Ready to shipment
        </span>
      </div>
    </div>
  );
}
