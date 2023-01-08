import './App.css';
import React, {createContext, useState} from "react";
import {LoginForm} from "./component/LoginForm";

const defaultFormContext = {
    user: {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: 'Male',
        race: [],
        consent: false,
        prefer: 'cola',

    },
    updateUser: () => null,
}

export const FormUserContext = createContext(defaultFormContext);


function App() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: 'Male',
        race: [],
        consent: false,
        prefer: 'cola',

    });

    const updateUser = (data) => {

        setUser(data);
    }
    return (
        <FormUserContext.Provider value={{user, updateUser}}>
            <LoginForm/>
        </FormUserContext.Provider>

    );
}

export default App;
