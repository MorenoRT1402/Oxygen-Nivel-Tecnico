/* eslint-disable react/prop-types */
const Select = ( {options} ) => {
    return(
        <select>
            {options.map((option) => (
                <option key={option.key} value={option.value}>
                    {option.value}
                </option>
            ))}
        </select>
    )
}

export default Select