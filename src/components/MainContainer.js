import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filter, setFilter] = useState('')
  const [sortMethod, setSortMethod] = useState('')

  useEffect(() => fetch('http://localhost:3001/stocks')
  .then(response => response.json())
  .then(data => setStockData(data)), [])


  function buyStock(id){
    setPortfolio([...portfolio, ...stockData.filter(stock => {
      return stock.id === id && !portfolio.includes(stock)
    })])
  }

  function sellStock(id){
    setPortfolio(portfolio.filter(stock => stock.id !== id))
  }

  let sortedData = []
  if(sortMethod === 'Alphabetically')
    sortedData = (stockData.sort((a, b) => a.name.localeCompare(b.name)))
  else if(sortMethod === 'Price')
    sortedData = stockData.sort((a, b) => a.price - b.price)
  else
    sortedData = stockData

  if(filter !== '')
    sortedData = sortedData.filter(stock => stock.type === filter)

  return (
    <div>
      <SearchBar setFilter={setFilter} setSortMethod={setSortMethod}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={sortedData} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
