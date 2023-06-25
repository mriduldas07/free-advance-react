import React, { useEffect, useState } from "react";
import Table from "../Table/Table";

export default function ExpressDelievery() {
  const [expressDelieveryData, setExpressDelieveryData] = useState([]);
  console.log(expressDelieveryData);
  useEffect(() => {
    fetch(
      "https://advance-react-server.onrender.com/customers?shipment_status_like=express&&_expand=product"
    )
      .then((res) => res.json())
      .then((data) => setExpressDelieveryData(data))
      .catch((err) => console.log(err));
  }, []);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(expressDelieveryData.length / itemsPerPage);

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
  const currentData = expressDelieveryData.slice(startIndex, endIndex);
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
