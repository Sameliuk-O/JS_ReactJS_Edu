import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { getUsers } from "../../pages/utils";
import logo from '../../logo.svg';

import "./sidebar.css";

export const Sidebar = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers(data)).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div className={"sidebar"}>
            <Link to={"/"} className={"nav-block"}>
                <img src={logo} alt="logo"/>
            </Link>
            <nav className={"nav-block"}>
                {users?.map(({id, name}) => <NavLink className={"nav-block"} key={id} to={`/users/${id}`}>
                        {name}
                    </NavLink>
                )}
            </nav>
        </div>
    )
}