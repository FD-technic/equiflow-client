import { useEffect, useState } from "react";
import ChartForm from "./ChartForm";
import ChartCard from "./ChartCard";
import { getApi } from "../api/getApi";
import type { StockData } from "../types/stock";

const tickers = ["QQQ", "AAPL", "SPY", "NVDA", "MSFT", "TSLA"];

const StockDashboard = () => {
  const [ticker, setTicker] = useState("QQQ");
  const [data, setData] = useState<StockData>();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getApi(
        `/api/av/stocks?ticker=${ticker}&interval=MONTHLY`,
      );

      setData(fetchedData);
      console.log("Fetched Data: ", fetchedData);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      <div className="layout">
        <aside className="sidebar">
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
