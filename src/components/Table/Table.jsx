import React from "react";
import "./Table.css";

export default function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.shipment_status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
