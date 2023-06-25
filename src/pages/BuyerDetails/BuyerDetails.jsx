import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BuyerDetails.css";

export default function BuyerDetails() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const { productId } = useParams();
  console.log(productId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      productId,
      shipment_status: status,
    };
    fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log("Post successfull"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="buyer-details">
      <h3>
        Can you order this glasses (a pair)?? Please submit this form.Thank you.
      </h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select Status</option>
            <option value="regular">Regular</option>
            <option value="express">Express</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="form-label">
            product:
          </label>
          <input
            type="number"
            id="status"
            value={productId}
            disabled
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}
