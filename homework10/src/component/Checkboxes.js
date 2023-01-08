export const Checkboxes = ({options, name, onChange}) => {

    return (
        <span>
            {options.map((el) => (
                <div key={`block-${el.value}`}>
                    <input value={el.value} name={name} id={el.value} type={"checkbox"}
                           onChange={(e) => {
                               onChange(e.target, name)
                           }}/>
                    <label htmlFor={el.value}> {el.label}</label>
                </div>
            ))}
    </span>
    )


}

