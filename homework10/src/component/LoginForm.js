import {Form} from "./Form";
import {FormField} from "./FormField";
import {useRef, useState} from "react";
import {regexpEmail, regexpName, regexpPassword, regexpPhoneNumber} from "../constants/regExp";
import {useContext} from "react";
import React from "react";
import {FormUserContext} from "../App";


export const LoginForm = () => {

    const {user, updateUser} = useContext(FormUserContext);

    const {
        firstName,
        lastName,
        title,
        email,
        phone,
        password,
        confirmPassword,
        gender,
        race,
        prefer,
    } = user;
    const [isYourFormChecked, setIsYourFormChecked] = useState(true);
    const [isGroupFormChecked, setIsGroupFormChecked] = useState(false);


    const [errors, setErrors] = useState([]);
    let errorsState = [];

    const handleChangeInput = (value, key) => {
        updateUser({...user, [key]: value})
    }

    const handleChangeCheckbox = (target, key) => {

        let newArr = [...user[key]];
        if (!target.checked) {
            newArr = user[key].filter((el) => el !== target.value)

        } else {
            newArr.push(target.value);
        }
        updateUser({
            ...user,
            race: newArr
        })
    }

    const handleChangeCheckBox = (e) => {

        if (e.target.name === 'Group') {
            setIsGroupFormChecked(e.target.checked)
            setIsYourFormChecked(!e.target.checked)


        }
        if (e.target.name === 'Solo') {
            setIsYourFormChecked(e.target.checked)
            setIsGroupFormChecked(!e.target.checked)


        }
        if (e.target.name === 'consent') {
            updateUser({
                ...user,
                consent: e.target.checked
            })
        }


    }

    const regExpInput = (regExp, value) => {
        return !regExp.test(value);

    }

    const onSubmit = () => {

        const isErrorFirstName = regExpInput(regexpName, firstName, "firstName");
        if (isErrorFirstName) {
            errorsState.push('firstName')
        } else {
            errorsState = [...errorsState].filter((el) => el !== 'firstName');
        }
        const isErrorLastName = regExpInput(regexpName, lastName, "lastName");
        if (isErrorLastName) {
            errorsState.push('lastName')
        } else {
            errorsState = [...errorsState].filter((el) => el !== 'lastName');

        }

        const isErrorTitle = regExpInput(regexpName, title, "title");
        if (isErrorTitle) {
            errorsState.push('title')
        } else {
            errorsState = [...errorsState].filter((el) => el !== 'title');
        }
        if (!isGroupFormChecked) {
            errorsState = [...errorsState].filter((el) => el !== 'title');


        } else {
            errorsState = [...errorsState].filter((el) => el !== 'firstName');
            errorsState = [...errorsState].filter((el) => el !== 'lastName');


        }

        const isErrorEmail = regExpInput(regexpEmail, email, "email");
        if (isErrorEmail) {
            errorsState.push('email')
        } else {
            errorsState = [...errorsState].filter((el) => el !== 'email');
        }
        const isErrorPassword = regExpInput(regexpPassword, password, "password")
        if (isErrorPassword) {
            errorsState.push('password')
        } else {
            errorsState = [...errorsState].filter((el) => el !== 'password');
        }
        const isErrorConfirmPassword = regExpInput(regexpPassword, confirmPassword, "confirmPassword")
        if (isErrorConfirmPassword) {
            errorsState.push('confirmPassword')
        } else {
            errorsState = [...errorsState].filter((el) => el !== 'confirmPassword');
        }
        const isErrorPhone = regExpInput(regexpPhoneNumber, phone, "phone")
        if (isErrorPhone) {
            errorsState.push('phone')
        } else {
            errorsState = [...errorsState].filter((el) => el !== "phone")
        }

        if (password !== confirmPassword) {
            errorsState.push('confirmPassword')

        } else {
            errorsState = [...errorsState].filter((el) => el !== 'confirmPassword');
        }
        setErrors(errorsState);
        if (!errorsState.length) {
            console.log('Form was submit with next data: ', user)
        } else {
            console.log('Form didnt submit with next data (check errors): ', user)
        }

    }


    const checkboxInfo = {
        group: {
            label: "Group Account",
            type: "checkbox",
            name: "Group",

        },
        solo: {
            label: "Your Account",
            type: "checkbox",
            name: "Solo",
        },
    }


    const formRef = useRef();

    return (

        <>
            <Form onSubmit={onSubmit} style={{maxWidth: "26rem", margin: "2rem auto"}} ref={formRef}>
                <fieldset>
                    <legend>
                        Login Form
                    </legend>
                    <span>
                    <FormField
                        label={`${checkboxInfo.group.label}`}
                        name={`${checkboxInfo.group.name}`}
                        type={`${checkboxInfo.group.type}`}
                        checked={isGroupFormChecked}
                        onChange={handleChangeCheckBox}

                    />
                    <FormField
                        label={`${checkboxInfo.solo.label}`}
                        name={`${checkboxInfo.solo.name}`}
                        type={`${checkboxInfo.solo.type}`}
                        checked={isYourFormChecked}
                        onChange={handleChangeCheckBox}
                    />
                </span>
                    {isYourFormChecked && <div>
                        <FormField
                            required
                            type="text"
                            name="firstName"
                            label="First Name"
                            placeholder="John"
                            value={firstName}
                            onChange={handleChangeInput}
                            error={errors.includes('firstName')}
                        />
                        <FormField
                            required
                            type="text"
                            name="lastName"
                            label="Last Name"
                            placeholder="Smite"
                            value={lastName}
                            onChange={handleChangeInput}
                            error={errors.includes('lastName')}
                        />
                    </div>}
                    {isGroupFormChecked && <div>
                        <FormField
                            required
                            type="text"
                            name="title"
                            label="Title"
                            value={title}
                            onChange={handleChangeInput}
                            error={errors.includes('title')}
                        />
                    </div>}
                    <FormField
                        required
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChangeInput}
                        error={errors.includes('email')}
                    />
                    <FormField
                        required
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={handleChangeInput}
                        error={errors.includes('password')}

                    />
                    <FormField
                        required
                        type="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={handleChangeInput}
                        error={errors.includes('confirmPassword')}
                    />

                    <FormField
                        required
                        type="phone"
                        name="phone"
                        label="Phone"
                        placeholder="Type here..."
                        value={phone}
                        onChange={handleChangeInput}
                        error={errors.includes('phone')}
                    />
                    <FormField

                        type="select"
                        name="gender"
                        label="Gender"
                        options={[
                            {value: 'male', label: 'Male'},
                            {value: 'female', label: 'Female'},
                            {value: 'other', label: 'Unspecified or Nonbinary'}
                        ]}
                        onChange={handleChangeInput}
                    />
                    <FormField

                        type="radio"
                        name="prefer"
                        label="What do you prefer?"
                        defaultChecked={prefer}
                        options={[
                            {value: 'pepsi', label: 'Pepsi'},
                            {value: 'cola', label: 'Cola'}
                        ]}

                        onChange={handleChangeInput}
                    />

                    <FormField

                        type="checkboxes"
                        name="race"
                        options={[
                            {value: 'unspecified', label: 'Not Reported'},
                            {value: 'preferUnspecified', label: 'Prefer not to answer'},
                            {value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native'},
                            {value: 'ASIAN', label: 'Asian'},
                            {value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American'},
                            {
                                value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER',
                                label: 'Native Hawaiian or Other Pacific Islander'
                            },
                            {value: 'WHITE', label: 'White'}
                        ]}

                        onChange={handleChangeCheckbox}

                    />

                    <FormField
                        required
                        name="consent"
                        type="checkbox"
                        label={(
                            <>
                                By checking this box, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy
                                Policy</a>.
                            </>
                        )}
                        onChange={handleChangeCheckBox}
                    />

                    <button type="submit">
                        Submit
                    </button>
                </fieldset>
            </Form>
            <button onClick={() => {
                formRef.current?.submit()
            }}>Submit Form
            </button>
        </>
    )
}

