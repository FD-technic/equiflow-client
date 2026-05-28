import type { TickerConfig } from "../data/tickers";

type Props = {
    id: string;
    name: string;
    values: TickerConfig[];
    value: string;
    onChange: (ticker: TickerConfig) => void;
}

const Select = ({ id, name, value, values, onChange }: Props) => {

    return (
        <>
        <label htmlFor={id}>Choose a {name} : </label>

        <select
            name={name}
            id={id}
            value={value}
            onChange={(e) => {
                const selectedTicker = values.find(
                    (ticker) => ticker.symbol === e.target.value
                );

                if (selectedTicker) {
                    onChange(selectedTicker);
                }
            }}
        >
            {values.map((ticker) => (
                <option key={ticker.symbol} value={ticker.symbol}>
                    {ticker.symbol}
                </option>
            ))}            
        </select>
        </>
    );
};

export default Select;