
type Props = {
    id: string;
    name: string;
    values: string[];
    value: string;
    onChange: (ticker: string) => void;
}

const Select = ({ id, name, value, values, onChange }: Props) => {

    return (
        <>
        <label htmlFor={name}>Choose a {name} : </label>

        <select
            name={name}
            id={id}
            value={value}
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