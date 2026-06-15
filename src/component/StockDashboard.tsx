import "../App.css";

import { useEffect, useState } from "react";
import ChartCard from "./ChartCard";
import { getApi } from "../api/getApi";
import type { StockData } from "../types/stock";
import type { ChartQuery } from "../types/chart";
import { TICKERS, type Ticker } from "../data/tickers";
import { PERIODS, type Period} from "../data/periods";
import Trend from "./Trend";
import ChartForm from "./ChartForm";

const StockDashboard = () => {
  const [data, setData] = useState<StockData>();
  const [query, setQuery] = useState<ChartQuery>({
    ticker: TICKERS[0],
    period: PERIODS[0],
  });

  const [timeStamp, setTimeStamp] = useState<string>();
  const date = timeStamp ? new Date(timeStamp) : null;

  const [loading, setLoading] = useState(true);

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

  const [error, setError] = useState<string>();

  useEffect(() => {
    localStorage.setItem("tickers", JSON.stringify(tickers));
  }, [tickers]);

  useEffect(() => {
    localStorage.setItem("lastTicker", query.ticker.value);
    localStorage.setItem("lastPeriod", query.period.value);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("periods", JSON.stringify(periods));
  }, [periods]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(undefined);
        setError(undefined);

        const request = `/api/stocks/av?ticker=${query.ticker.value}&period=${query.period.period}`;
        const fetchedData = await getApi(request);

        setData(fetchedData);
        setTimeStamp(fetchedData.updateAt);
      } catch (error) {
        console.error(error);

        setError(
          "Date are currently unavailable. The provider may have reached its request limit."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

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
