import type { StockPoint } from "../types/stock";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

type Props = {
  label: string;
  data: StockPoint[];
};

const ChartArea = ({ label, data }: Props) => {
  return (
    <>
      <div className="section chart">
        <div className="chart-container">
          <h3>{label}</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 5,
                left: -30,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="date"
                tickFormatter={(value) => value.slice(5)}
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
              />

              <YAxis tick={{ fontSize: 11 }} />

              <Tooltip />

              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3f8f3f" stopOpacity={0.8} />

                  <stop offset="95%" stopColor="#3f8f3f" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="close"
                stroke="#3f8f3f"
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ChartArea;
