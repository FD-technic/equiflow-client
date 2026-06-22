
import type { PortfolioDTO } from "../dto/PortfolioDTO";

type PortfolioTableProps = {
  portfolios: PortfolioDTO[];
  onSelect: (portfolioId: number) => void;
};

const PortfolioTable = ({ portfolios, onSelect }: PortfolioTableProps) => {
  
  
    return (
    <div className="section">
      <table border={1}>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Typ</th>
            <th>User</th>
            <th>Positions</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio) => (
            <tr key={portfolio.id} onClick={() => onSelect(portfolio.id)}>              
                <td>{portfolio.name}</td>
                <td>{portfolio.type}</td>
                <td>{portfolio.ownerName}</td>
                <td>{portfolio.positions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
