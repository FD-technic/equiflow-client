import type { Period } from "../data/periods";
import type { StockPoint } from "../types/stock";
import "./Trend.css";

type Props = {
  name: string;
  period: Period;
  data: StockPoint[];
};

const Trend = ({ name, period, data }: Props) => {
  let performanceLabel;
  let slicing;

  switch (period.value) {
    case "DAY":
      performanceLabel = "Weekly";
      slicing = -7;
      break;
      case "WEEK":
      performanceLabel = "Quarterly";
      slicing = -14;
      break;
    default:
      performanceLabel = "Yearly";
      slicing = -13;
      
  }
   
  const performancePeriod = data?.slice(slicing);
  const start = performancePeriod?.[0].close;
  const end = performancePeriod?.[performancePeriod.length - 1].close;
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
        <p>{performanceLabel} performance</p>
        <h3 className={progress >= 0 ? "trend-positive" : "trend-negative"}>
          {progress > 0 ? "+" : ""}
          {progress.toFixed(3)}%
        </h3>
      </div>
    </>
  );
};

export default Trend;
