import {Error} from "./Error";

export const Input = ({onChange, error, label, name, ...rest}) => {

    return (
        <div>
            <input
                {...rest}
                onChange={(e) => onChange(e.target.value, name)}
                type="text"
            />
            {error && <Error label={label}/>}

        </div>
    )
}