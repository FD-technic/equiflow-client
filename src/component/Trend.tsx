import type { StockData } from "../types/stock";

type Props = {
  name: string;
  data: StockData;
};

const Trend = ({ name, data }: Props) => {
  const lastWeek = data?.points.slice(-7);
  const start = lastWeek?.[0].price;
  const end = lastWeek?.[lastWeek.length - 1].price;
  const progress =
    start !== undefined && end !== undefined ? (end / start - 1) * 100 : 0;

  return (
    <>
      <div className="trend section">
        <h3 className="trend title">{name}</h3>
        <p>Start / end </p>
        <div className="trend-values">
          {start?.toFixed(2)} / {end?.toFixed(2)}
        </div>
        <p>Weekly performance</p>
        <h3 className={progress >= 0 ? "trend-positive" : "trend-negative"}>
          {progress > 0 ? "+" : ""}
          {progress.toFixed(3)}%
        </h3>
      </div>
    </>
  );
};

export default Trend;
