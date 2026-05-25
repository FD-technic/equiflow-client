
type Props = {
    id: string;
    label: string;
    values: string[];
    value: string;
    onChange: (ticker: string) => void;
}

const Select = ({ label, values, onChange }: Props) => {

    return (
        <>
        <label htmlFor={label}>Chose a {label} : </label>

        <select
            name={label}
            id={label}
            onChange={(e) => onChange(e.target.value)}
        >
            {values.map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}            
        </select>
        </>
    );
};

export default Select;