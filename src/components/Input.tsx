type Props = {
    label: string,
    id: string,
    type: string
}

const Input = ({ label, id, type }: Props) => { 


    return (
        <>
        <label>{label}: </label>
        <input
            id={id}
            type={type}></input>
        </>
    );
};

export default Input;