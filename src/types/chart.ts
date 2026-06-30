import type { Ticker } from "../data/tickers";
import type { Period } from "../data/periods";

export type ChartQuery = {
    ticker: Ticker;
    period: Period;
};