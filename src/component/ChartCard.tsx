import "../App";
import type { StockData } from "../types/stock";
import ChartArea from "./ChartArea";

type Props = {
  data: StockData;
};

const ChartCard = ({ data }: Props) => {
  return (
    <>
      <div className="section">
        <ChartArea label={data.ticker} data={data.points} />
      </div>
    </>
  );
};

export default ChartCard;
