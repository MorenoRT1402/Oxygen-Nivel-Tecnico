/* eslint-disable react/prop-types */
import { GetOperationName } from "../js/options";

const Select = ({ options , onChange } ) => {

    const handleChange = event => {
        onChange(event.target.value);
    };

    return (
        <select className='input' onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option.id}>
                    {GetOperationName(option)}
                </option>
            ))}
        </select>
    );
};

export default Select;
