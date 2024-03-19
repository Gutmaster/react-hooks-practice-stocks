import React from "react";

function Stock({stock, exchangeStock}) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => exchangeStock(stock.id)}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
