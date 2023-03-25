import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

import {UserProps} from "../../models/user";

import "./Sidebar.css";

import logo from '../../logo.svg';

export const Sidebar = () => {
    const [users, setUsers] = useState<Array<UserProps>>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data: Array<UserProps>) => setUsers(data));
    }, [])


    return (
        <div className={"Sidebar "}>
            <Link to={"/"} reloadDocument className={"nav-block"}>
                <img src={logo} alt="logo"/>
            </Link>
            <nav className={"nav-block"}>
                {users?.map(user => <NavLink className={"nav-block"} key={`side${user.id}`} to={`/users/${user.id}`}>
                        {user.name}
                    </NavLink>
                )}
            </nav>
        </div>
    )
}