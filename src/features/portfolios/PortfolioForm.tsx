import { TICKERS } from "../../features/stocks/tickers";
import Select from "../../components/Select";
import type { ChartQuery } from "../../components/charts/chart.types";
import Input from "../../components/Input";

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
