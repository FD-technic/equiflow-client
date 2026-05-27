import "../index.css";
import "../style.css";
import type { StockPoint } from "../types/stock";
import type { TickerConfig } from "../data/tickers";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  label: TickerConfig;
  data: StockPoint[];
};

const ChartLine = ({ label, data }: Props) => {
  console.log("data grafu: ", data);

  return (
    <>
      <div className="section chart">
        <div className="chart-container">
          <h3>{label.symbol}</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="price"
                stroke="#3f8f3f"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ChartLine;
