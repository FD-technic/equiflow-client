import "../App.css";

import { useEffect, useState } from "react";
import ChartCard from "./ChartCard";
import { getApi } from "../api/getApi";
import type { StockData } from "../types/stock";
import type { ChartQuery } from "../types/chart";
import { TICKERS, type Ticker } from "../data/tickers";
import { PERIODS, type Period } from "../data/periods";
import Trend from "./Trend";
import ChartForm from "./ChartForm";

const StockDashboard = () => {
  const [data, setData] = useState<StockData>();
  const [query, setQuery] = useState<ChartQuery>({
    ticker: TICKERS[0],
    period: PERIODS[0]
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
      const request = `/api/stocks/av?ticker=${query.ticker.value}&period=${query.period.value}`;
      console.log("Request: ", request);
      const fetchedData = await getApi(request);

      setData(fetchedData.stock);
      setTimeStamp(fetchedData.lastUpdate);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <div className="layout">
        <aside className="sidebar">
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
          {data && <Trend
            name={query.ticker.label}
            data={data}
          />}
        </aside>
        <main className="content">
        {data && (
          <div>
            <p>
              Last Update: {
                date 
                ? `${date?.toLocaleDateString("cs-CZ")} / ${date?.toLocaleTimeString("cs-CZ")}` : "N/A"
              } 
            </p>  
          <ChartCard data={data} />
          </div>
          )
        }
        </main>
      </div>
    </>
  );
};

export default StockDashboard;
