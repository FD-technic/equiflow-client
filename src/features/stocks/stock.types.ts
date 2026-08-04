export type StockPoint = {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
};

export type StockData = {
currency: string;
points: StockPoint[];
ticker: string;
updateAt: Date;
};
