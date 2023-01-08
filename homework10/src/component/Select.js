export const Select = ({options, onChange, name, ...rest}) => {
    return (
        <span>
            <select {...rest} onChange={(e) => {
                onChange(e.target.value, name)
            }}>
                {options.map((el, index) => <option value={el.value} key={`select-option-${index}`}
                                                    >{el.label}</option>) }

            </select>
        </span>
    )
}