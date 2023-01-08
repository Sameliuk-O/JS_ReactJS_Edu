export const Radio = ({options, name, type, defaultChecked, onChange }) => {

    return (
        <span>

            {options.map((el) => (
                <span key={`block-${el.value}`}>
                   <input name={name} id={el.value} type={type} defaultChecked={defaultChecked === el.value}
                          onChange={(e) => {
                              onChange(el.value, name)
                          }}/>
                <label htmlFor ={ el.value}> {el.label}</label>
                </span>
                ))}
        </span>
    )
}