import { TICKERS } from "./tickers";
import { PERIODS } from "./periods";
import Select from "../../components/Select";
import type { ChartQuery } from "../../components/charts/chart.types";

type Props = {
  id: string
  value: ChartQuery;
  onChange: (chartQuery: ChartQuery) => void;
};

const ChartForm = ({ id, value, onChange }: Props) => {
   
  return (
    <div className="section" id={id}>
      <div className="sidebar">
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
      
        <Select
        id={"period"}
        name={"Range"}
        label={"period"}
        values={PERIODS}
        value={value.period.value}
        onChange={(period) => 
          onChange({
            ...value,
            period
          })
        }
      />
      </div>
    </div>
  );
};

export default ChartForm;
