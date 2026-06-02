

type Props<T extends { label: string, value: string }> = {
    id: string;
    name: string;
    label: string;
    values: T[];
    value: string;
    onChange: (item: T) => void;
}

const Select = <T extends { label: string, value: string }>({
    id,
    name,
    value,
    values,
    onChange
 }: Props<T>) => {

    return (
        <>
        <label htmlFor={id}>Choose a {name} : </label>

        <select
            name={name}
            id={id}
            value={value}
            onChange={(e) => {
                const selectedItem = values.find(
        item => item.value === e.target.value
    );

                if (selectedItem) {
                    onChange(selectedItem);
                }
            }}
        >
            {values.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}            
        </select>
        </>
    );
};

export default Select;