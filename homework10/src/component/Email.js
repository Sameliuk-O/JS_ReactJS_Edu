import {Error} from "./Error";

export const Email = ({onChange, error, value, label, name,...rest}) => {
    return (
        <div>
        <input {...rest }
               onChange={(e) => onChange(e.target.value, name)}
        />
            {error &&  <Error label={label}/>}
    </div>
    )


}