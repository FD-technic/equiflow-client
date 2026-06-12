import "../App";
import type { StockData } from "../types/stock";
import ChartArea from "./ChartArea";
import "./Chart.css";

type Props = {
  data: StockData;
};

const ChartCard = ({ data }: Props) => {
  console.log("DATA: ", data);

  return (
      <ChartArea label={data.ticker} data={data.points} />
  );
};

export default ChartCard;
