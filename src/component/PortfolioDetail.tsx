import type { PortfolioDetailDTO } from "../dto/PortfolioDetailDTO";
import { useApi } from "../api/useApi";

type PortfolioDetailProps = {
  portfolioId: number;
};

const PortfolioDetail = ({ portfolioId }: PortfolioDetailProps) => {

  const {
    data: portfolio,
    loading,
    error
  } = useApi<PortfolioDetailDTO>(`/api/portfolios/${portfolioId}`);

  console.log(portfolio);
  return (
    <div>
      {loading && (
        <p>Loading ...</p>
      )}
      {error && (
        <h4>{error.message}</h4>
      )}
      {portfolio && (
      <div>
      <div className="section">
        <table border={1} className="portfolio-table">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Portfolio name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{portfolio.ownerName}</td>
              <td>{portfolio.name}</td>
              <td>{portfolio.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {portfolio.positions.length>0 ? (
              <div className="section">
        <table border={1} className="portfolio-table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Quantity</th>
              <th>Buy Price</th>
              <th>Invested value</th>
              <th>Current Price</th>
              <th>Value</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.positions.map((position) => (
              <tr key={position.ticker}>
                <td>{position.ticker}</td>
                <td>{position.quantity}</td>
                <td>{position.buyPrice.toFixed(2)}</td>
                <td>{(position.quantity * position.buyPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ) : (
        <h3>This portfolio contains no positions</h3>
      )}

       </div> 
      )}
    </div>
  );
};

export default PortfolioDetail;
