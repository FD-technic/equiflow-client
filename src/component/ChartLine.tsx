import type { StockPoint } from "../types/stock";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

type Props = {
  label: string;
  data: StockPoint[];
};

const ChartLine = ({ label, data }: Props) => {

  return (
    <div className="section chart">
      <div className="chart-container">
        <h3>{label}</h3>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tickFormatter={(value) => value.slice(5)}
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
            />

            <YAxis
              tick={{ fontSize: 14 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#3f8f3f"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartLine;