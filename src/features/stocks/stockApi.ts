import type { StockData } from "./stock.types";
import { useApi } from "../../api/useApi";

export const useStock = (ticker: string, period: string) => {
    const request = 
        `/api/stocks?provider=ALPHAVANTAGE&ticker=${ticker}&period=${period}`;  

    return useApi<StockData>(
        request
      );
    };
