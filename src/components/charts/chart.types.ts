import type { Ticker } from "../../features/stocks/tickers";
import type { Period } from "../../features/stocks/periods";

export type ChartQuery = {
    ticker: Ticker;
    period: Period;
};