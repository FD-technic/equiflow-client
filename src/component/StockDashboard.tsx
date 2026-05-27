import "../App.css";

import { useEffect, useState } from "react";
import ChartCard from "./ChartCard";
import { getApi } from "../api/getApi";
import type { StockData } from "../types/stock";
import { DEFAULT_TICKERS, type Ticker } from "../data/tickers";
import Trend from "./Trend";
import ChartForm from "./ChartForm";

const StockDashboard = () => {
  const [data, setData] = useState<StockData>();
  const [loading, setLoading] = useState(true);
  const [tickers, setTickers] = useState<Ticker[]>(() => {
    const saved = localStorage.getItem("tickers");

    if (saved) {
      return JSON.parse(saved) as Ticker[];
    }

    return DEFAULT_TICKERS;
  });

  const [ticker, setTicker] = useState<Ticker>(() => {
    const savedTicker = localStorage.getItem("lastTicker");

    if (savedTicker) {
      return savedTicker;
    }

    return tickers[0];
  });

  useEffect(() => {
    localStorage.setItem("tickers", JSON.stringify(tickers));
  }, [tickers]);

  useEffect(() => {
    localStorage.setItem("lastTicker", ticker);
  }, [ticker]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(undefined);

      const fetchedData = await getApi(
        `/api/av/stocks?ticker=${ticker}&interval=DAILY`,
      );

      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      <div className="layout">
        <aside className="sidebar">
          {loading && (
            <div>
              <p>Loading...</p>
              <p>Loading... Backend server may take a moment to wake up.</p>
            </div>
          )}
          <ChartForm
            id="ticker"
            label="Ticker"
            value={ticker}
            values={tickers}
            setTickers={setTickers}
            onChange={setTicker}
          />
          {data && <Trend
            name={ticker}
            data={data}
          />}
        </aside>
        <main className="content">
        {data && <ChartCard data={data} />}
        </main>
      </div>
    </>
  );
};

export default StockDashboard;
