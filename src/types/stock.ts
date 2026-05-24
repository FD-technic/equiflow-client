export type StockPoint = {
    date: string;
    price: number;
};

export type StockData = {
currency: string;
points: StockPoint[];
ticker: string;
};
