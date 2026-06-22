import { useState } from "react";
import { useApi } from "../api/useApi";
import type { PortfolioDTO } from "../dto/PortfolioDTO";
import PortfolioTable from "./PortfolioTable";
import PortfolioDetail from "./PortfolioDetail";

const PortfolioDashboard = () => {
  const {
    data: portfolios,
    loading,
    error,
  } = useApi<PortfolioDTO[]>("/api/portfolios");


  const [selectedPortfolioId, setSelectedPortfolioId] =
    useState<number | null>(null);

  const handlePortfolioSelect = (portfolioId: number) => {
    
    setSelectedPortfolioId(portfolioId);
  }

  console.log(portfolios);


  return (
    <>
      <div>
        {loading && (
          <div>
            <p>Loading...</p>
            <p>Backend server may take a moment to wake up.</p>
          </div>
        )}
        {error && <div>{error.message}</div>}
        <div className="content">
          <h2>Portfolio</h2>

          {portfolios ? (
            <div className="section">
              <PortfolioTable
                portfolios={portfolios}
                onSelect={handlePortfolioSelect}
            />
              {selectedPortfolioId && (
                <div className="section">
                <h2>Portfolio detail</h2>
                <PortfolioDetail portfolioId={selectedPortfolioId} />
              </div>
              )}              
            </div>
          ) : (
            <div>
              <p>---</p>
              <h3>No portfolios found</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioDashboard;
