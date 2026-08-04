import "../../App";
import type { StockPoint } from "../../features/stocks/stock.types";
import ChartArea from "./ChartArea";
import "./Chart.css";

type Props = {
  ticker: string;
  data: StockPoint[];
};

const ChartCard = ({ ticker, data }: Props) => {
  console.log("DATA: ", data);

  return (
      <ChartArea label={ticker} data={data} />
  );
};

export default ChartCard;
