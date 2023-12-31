import React, { useEffect, useState } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./Buyer.css";

export default function Buyer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://advance-react-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="buyer">
      {data.map((d, i) => (
        <GlassCard data={d} key={i} />
      ))}
    </div>
  );
}
