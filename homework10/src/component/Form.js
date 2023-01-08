import React, { useImperativeHandle, useRef, useState} from "react";

export const Form = React.forwardRef(({
                         onSubmit: propsOnSubmit,
                         children,
                         ...rest
                     }, ref) => {
    const formRef = useRef();

    const submitRef = useRef()

    useImperativeHandle(ref,() => ({
        submit:() => {
            submitRef.current?.click()
        }
    }))

    const [isSubmitting, setIsSubmitting] = useState(false);



    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        const values = serialize(formData);

        try {
            if (propsOnSubmit) {
                await propsOnSubmit(values);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
            <form
                {...rest}
                ref={formRef}
                onSubmit={onSubmit}>
                {typeof children === "function" ? children ({isSubmitting}) : children}
                <input ref={submitRef} type={"submit"} hidden/>
            </form>
    )
})

const serialize = (data) => {
    let obj = {}
    for (let [key, value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
}