import { useId} from "react";
import {Input} from "./Input";
import {PasswordInput} from "./PasswordInput";
import {Checkbox} from "./Checkbox";
import {Select} from "./Select";
import {Email} from "./Email";
import {Phone} from "./Phone";
import {Radio} from "./Radio";
import {Checkboxes} from "./Checkboxes";
import React from "react";
import ("../style/form-field.css")



export const FormField = ({
                              type = "text",
                              id: propsId,
                              label,

                              ...rest
                          }) => {
    const innerId = useId();
    const id = propsId || `FormField ${innerId}`;


    let Component;
    switch (type) {
        case 'confirmPassword':
            Component = PasswordInput;
            break;
        case 'password':
            Component = PasswordInput;
            break;
        case 'checkbox':
            Component = Checkbox;
            break;
        case 'select':
            Component = Select;
            break;
        case 'email':
            Component = Email;
            break;
        case 'phone':
            Component = Phone;
            break;
        case 'radio':
            Component = Radio;
            break;
        case 'checkboxes':
            Component = Checkboxes;
            break;
        default:
            Component = Input;
            break;
    }

    return (
        <div className="FormField">
            {
                label && <label htmlFor={id}>{label}</label>
            }
            <Component
                {...rest}
                id={id}
                type={type}
                label={label}
            />

        </div>
    )
}
