import type { Period } from "../data/periods";
import type { Ticker } from "../data/tickers";

export type ChartQuery = {
    ticker: Ticker;
    period: Period;
};