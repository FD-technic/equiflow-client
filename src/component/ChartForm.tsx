import Select from "./Select";

type Props = {
  id: string;
  label: string;
  values: string[];
  value: string;
  onChange: (ticker: string) => void;
};

const ChartForm = ({ id, label, value, values, onChange }: Props) => {
  return (
    <>
      <form className="section">
        <Select
          id={id}
          label={label}
          values={values}
          value={value}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default ChartForm;
