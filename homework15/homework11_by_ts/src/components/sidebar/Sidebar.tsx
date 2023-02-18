import {Link, NavLink, Route} from "react-router-dom";
import logo from '../../logo.svg';
import "./Sidebar.css";
import {useEffect, useState} from "react";
import {getUsers} from "../../pages/utils";
import {UserProps} from "../../models/user";

export const Sidebar = () => {
    const [users, setUsers] = useState<Array<UserProps>>([]);
    useEffect(() => {
        getUsers(setUsers)
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