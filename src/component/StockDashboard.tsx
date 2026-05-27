import { useEffect, useState } from "react";
import ChartForm from "./ChartForm";
import ChartCard from "./ChartCard";
import { getApi } from "../api/getApi";
import type { StockData } from "../types/stock";

const tickers = ["QQQ", "AAPL", "SPY", "NVDA", "MSFT", "TSLA"];

const StockDashboard = () => {
  const [ticker, setTicker] = useState("QQQ");
  const [data, setData] = useState<StockData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const fetchedData = await getApi(
        `/api/av/stocks?ticker=${ticker}&interval=MONTHLY`,
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
              <p>Backend server may take a moment to wake up.</p>
            </div>
          )}
          <ChartForm
            id="ticker"
            label="Ticker"
            value={ticker}
            values={tickers}
            onChange={setTicker}
          />
        </aside>
        {data && <ChartCard data={data} />}
      </div>
    </>
  );
};

export default StockDashboard;
