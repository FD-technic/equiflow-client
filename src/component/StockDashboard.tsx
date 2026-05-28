import "../App.css";

import { useEffect, useState } from "react";
import ChartCard from "./ChartCard";
import { getApi } from "../api/getApi";
import type { StockData } from "../types/stock";
import { TICKERS, type TickerConfig } from "../data/tickers";
import Trend from "./Trend";
import ChartForm from "./ChartForm";

const StockDashboard = () => {
  const [data, setData] = useState<StockData>();
  const [loading, setLoading] = useState(true);

  const [tickers, setTickers] = useState<TickerConfig[]>(() => {
    const saved = localStorage.getItem("tickers");

    if (saved) {
      return JSON.parse(saved) as TickerConfig[];
    }

    return TICKERS;
  });

  const [selectedTicker, setSelectedTicker] = useState(TICKERS[0]);

  useEffect(() => {
    localStorage.setItem("tickers", JSON.stringify(tickers));
  }, [tickers]);

  useEffect(() => {
    localStorage.setItem("lastTicker", selectedTicker.symbol);
  }, [selectedTicker]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(undefined);

      const fetchedData = await getApi(
        `/api/stocks/av?ticker=${selectedTicker.symbol}&interval=${selectedTicker.period}`,
      );

      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, [selectedTicker]);

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
            label="ticker"
            value={selectedTicker.symbol}
            values={tickers}
            onChange={setSelectedTicker}
          />
          {data && <Trend
            name={selectedTicker.symbol}
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
