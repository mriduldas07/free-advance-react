import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import "./AllOrders.css";

export default function AllOrders() {
  const [allOrdersData, setAllOrdersData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/customers?_expand=product")
      .then((res) => res.json())
      .then((data) => setAllOrdersData(data))
      .catch((err) => console.log(err));
  }, []);

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allOrdersData.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = allOrdersData.slice(startIndex, endIndex);

  return (
    <div className="table-container">
      <Table data={currentData} />
      {/* Pagination */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
