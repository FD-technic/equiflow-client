import "../../App.css";

import { useEffect, useState } from "react";
import ChartCard from "../../components/charts/ChartCard";
import { TICKERS, type Ticker } from "./tickers";
import { PERIODS, type Period} from "./periods";
import Trend from "../../components/Trend";
import ChartForm from "../../components/charts/ChartForm";
import { loadChartQuery, saveChartQuery } from "../../utils/chartQuery";
import { useStock } from "./stockApi";

const StockDashboard = () => {
  const [query, setQuery] = useState(loadChartQuery);

  const { data, loading, error } =
    useStock(query.ticker.value, query.period.period);

  
  const date = data?.updateAt
    ? new Date(data.updateAt)
    : null;

  const [tickers] = useState<Ticker[]>(() => {
    const saved = localStorage.getItem("tickers");

    if (saved) {
      return JSON.parse(saved) as Ticker[];
    }

    return TICKERS;
  });

  const [periods] = useState<Period[]>(() => {
    const saved = localStorage.getItem("periods");

    if (saved) {
      return JSON.parse(saved) as Period[];
    }

    return PERIODS;
  });

  useEffect(() => {
    localStorage.setItem("tickers", JSON.stringify(tickers));
  }, [tickers]);

  useEffect(() => {
    saveChartQuery(query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("periods", JSON.stringify(periods));
  }, [periods]);

  

  const chartData = data?.points
  ? [...data.points].slice(0,query.period.days).reverse()
  : [];

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          {loading && (
            <div>
              <p>Loading...</p>
              <p>Backend server may take a moment to wake up.</p>
            </div>
          )}
          <ChartForm
            id="form"
            value={query}
            onChange={setQuery}
          />
          {data && (
            <Trend
              name={query.ticker.label}
              period={query.period.days}
              data={chartData}
            />
          )}
        </div>
        <div className="content">
          {error && (
            <div className="big-text">
              <p>
                Data are currently unavailable.
              </p>
              <p>
                Try another ticker or period.
              </p>
            </div>
          )}
          {!error && data && (
            <div>
              <div className="update-form">
                Last Update:{" "}
                {date
                  ? `${date?.toLocaleDateString("cs-CZ")} / ${date?.toLocaleTimeString("cs-CZ")}`
                  : "N/A"}
              </div>
              <ChartCard
                ticker={data.ticker}
                data={chartData} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StockDashboard;
