import type { PortfolioDetailDTO } from "../dto/PortfolioDetailDTO";
import { useApi } from "../api/useApi";
import { useState } from "react";
import BaseModal from "./modal/BaseModal";
import ConstructionContent from "./modal/ConstructionContent";

type PortfolioDetailProps = {
  portfolioId: number;
  onClose: () => void;
};

const PortfolioDetail = ({ portfolioId, onClose }: PortfolioDetailProps) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [slectedPosition, setSlectedPosition] = useState<PortfolioDetailDTO | null>(null);

  const {
    data: portfolio,
    loading,
    error,
  } = useApi<PortfolioDetailDTO>(`/api/portfolios/${portfolioId}`);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <h4>{error.message}</h4>}
      {portfolio && (
        <div>
          <div className="section simple">
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
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
          {portfolio.positionDetailDTO.length > 0 ? (
            <div className="section simple">
              <table border={1} className="portfolio-table selectable">
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Quantity</th>
                    <th>Buy Price</th>
                    <th>Invested value</th>
                    <th>Current Price</th>
                    <th>Value</th>
                    <th>Profit</th>
                    <th>Profit %</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.positionDetailDTO.map((position) => (
                    <tr
                      key={position.ticker}
                      onClick={() => setIsDetailOpen(true)}
                    >
                      <td>{position.ticker}</td>
                      <td>{position.quantity}</td>
                      <td>{position.buyPrice.toFixed(2)}</td>
                      <td>{position.currentPrice.toFixed(2)}</td>
                      <td>{position.investedValue.toFixed(2)}</td>
                      <td>{position.currentValue.toFixed(2)}</td>
                      <td>{position.profit.toFixed(2)}</td>
                      <td>{position.profitPercent.toFixed(2)}</td>
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

      <BaseModal
        title="Position detail"
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      >
        <ConstructionContent />
      </BaseModal>
    </div>
  );
};

export default PortfolioDetail;
