import { TICKERS } from "../features/stocks/tickers";
import { PERIODS } from "../features/stocks/periods";
import type { ChartQuery } from "../components/charts/chart.types";

export function loadChartQuery(): ChartQuery {
  const lastTicker = localStorage.getItem("lastTicker");
  const lastPeriod = localStorage.getItem("lastPeriod");

  return {
    ticker: TICKERS.find((t) => t.value === lastTicker) ?? TICKERS[0],
    period: PERIODS.find((p) => p.value === lastPeriod) ?? PERIODS[0],
  };
}

export function saveChartQuery(query: ChartQuery) {
  localStorage.setItem("lastTicker", query.ticker.value);
  localStorage.setItem("lastPeriod", query.period.value);
}

export function setChartQuery(ticker: string, period: string) {
  localStorage.setItem("lastTicker", ticker);
  localStorage.setItem("lastPeriod", period);
}
