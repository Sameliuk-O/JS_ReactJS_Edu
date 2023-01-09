export const Checkbox = ({onChange, name, ...rest}) => {

    return (
        <span>
        <input {...rest} onChange={(e) => onChange(e, name)} name={name}
        />
    </span>
    )


}