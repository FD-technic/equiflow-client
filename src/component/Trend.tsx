import type { StockPoint } from "../types/stock";
import "./Trend.css";

type Props = {
  name: string;
  period: number;
  data: StockPoint[];
};

const Trend = ({ name, data }: Props) => {
        
   
  const start = data?.[0].close;
  const end = data?.[data.length - 1].close;
  const progress =
    start !== undefined && end !== undefined ? ((end - start) / start) * 100 : 0;

  return (
    <>
      <div className="trend section">
        <h3 className="trend title">{name}</h3>
        <p>Start / end </p>
        <div className="trend-values">
          {start?.toFixed(2)} / {end?.toFixed(2)}
        </div>
        <p>Performance</p>
        <h4 className={progress >= 0 ? "trend-positive" : "trend-negative"}>
          {progress > 0 ? "+" : ""}
          {progress.toFixed(3)}%
        </h4>
      </div>
    </>
  );
};

export default Trend;
