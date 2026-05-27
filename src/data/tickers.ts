export type TickerConfig = {
    symbol: string;
    period: string;
};

export const TICKERS: TickerConfig[] = [
    {
        symbol: "QQQ",
        period: "DAILY",
    },
    {
        symbol: "SPY",
        period: "DAILY",
    },
    {
        symbol: "NVDA",
        period: "DAILY",
    },
    {
        symbol: "MSFT",
        period: "DAILY",
    },
    {
        symbol: "TSLA",
        period: "DAILY",
    },
];
