/* eslint-disable react/prop-types */
import { GetOperationName } from "../js/options";

const Select = ({ options , setter } ) => {
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setter(selectedOption);
    };

    return (
        <select className='input' onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option.id}>
                    { GetOperationName(option) }
                </option>
            ))}
        </select>
    );
};

export default Select;
