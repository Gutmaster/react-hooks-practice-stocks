import React from "react";
import Stock from "./Stock";

function StockContainer({stockData, buyStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockData.map(stock => <Stock key={stock.id} stock={stock} exchangeStock={buyStock}/>)}
    </div>
  );
}

export default StockContainer;
