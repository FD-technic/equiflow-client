import "../App";
import ChartLine from "./ChartLine";
import type { StockData } from "../types/stock";

type Props = {
  data: StockData;
}

const ChartCard = ({ data }: Props) => {
  return (
    <>
      <div className="section">
        <ChartLine
          data={data.points}
        />
      </div>
    </>
  );
};

export default ChartCard;
