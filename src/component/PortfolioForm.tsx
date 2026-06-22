import { TICKERS } from "../data/tickers";
import Select from "./Select";
import type { ChartQuery } from "../types/chart";
import Input from "./Input";

type Props = {
  id: string
  value: ChartQuery;
  onChange: (chartQuery: ChartQuery) => void;
};

const PortfolioForm = ({ id, value, onChange }: Props) => {
   
  return (
    <form id={id} className="section">
        <Select
        id={"ticker"}
        name={"Ticker"}
        label={"ticker"}
        values={TICKERS}
        value={value.ticker.value}
        onChange={(ticker) => 
          onChange({
            ...value,
            ticker
          })
        }
        />
      
        <Input
          label="Quantity"
          id="quantity"
          type="TEXT"
        />
        <Input
          label="Price"
          id="price"
          type="TEXT"
        />
        <button type="submit">Přidat</button>
    </form>
    
  );
};

export default PortfolioForm;
