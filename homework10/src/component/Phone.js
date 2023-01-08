import {Error} from "./Error";

export const Phone = ({onChange, error, label, name, ...rest}) => {
    return (
        <div>
            <input {...rest}
                   onChange={(e) => onChange(e.target.value, name)}
            />
            {error && <Error label={label}/>}
        </div>
    )


}