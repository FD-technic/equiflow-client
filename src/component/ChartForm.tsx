import type { TickerConfig } from "../data/tickers";
import Select from "./Select";

type Props = {
  id: string;
  label: string;
  values: TickerConfig[];
  value: string;
  onChange: (tickerConfig: TickerConfig) => void;
};

const ChartForm = ({ id, label, value, values, onChange }: Props) => {
  return (
    <div className="section">
      <Select
        id={id}
        name={label}
        values={values}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ChartForm;
