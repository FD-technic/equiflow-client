import "../App.css";
import { useState } from "react";
import { useApi } from "../api/useApi";
import type { PortfolioDTO } from "../dto/PortfolioDTO";
import PortfolioTable from "./PortfolioTable";
import PortfolioDetail from "./PortfolioDetail";
import BaseModal from "./modal/BaseModal";
import ConstructionContent from "./modal/ConstructionContent";

const PortfolioDashboard = () => {
  const {
    data: portfolios,
    loading,
    error,
  } = useApi<PortfolioDTO[]>("/api/portfolios");

  const [selectedPortfolioId, setSelectedPortfolioId] = useState<number | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePortfolioSelect = (portfolioId: number) => {
    setSelectedPortfolioId(portfolioId);
  };

  console.log(portfolios);

  return (
    <>
      <div className="layout-sm">
        <div className="content">
          <h2>Portfolio</h2>
          {loading && (
            <div>
              <p>Loading...</p>
              <p>Backend server may take a moment to wake up.</p>
            </div>
          )}
          {error && <div>{error.message}</div>}
          {portfolios ? (
            <div className="section sm">
              {!selectedPortfolioId ? (
                <div>
                  <button onClick={() => setIsModalOpen(true)} className="btn">
                    New portfolio
                  </button>
                  <PortfolioTable
                    portfolios={portfolios}
                    onSelect={handlePortfolioSelect}
                  />
                </div>
              ) : (
                <div className="section sm">
                  <h2>Portfolio detail</h2>
                  <PortfolioDetail
                    portfolioId={selectedPortfolioId}
                    onClose={() => setSelectedPortfolioId(null)}
                  />
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

      <BaseModal
      title=" "
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ConstructionContent
         />
      </BaseModal>
    </>
  );
};

export default PortfolioDashboard;
