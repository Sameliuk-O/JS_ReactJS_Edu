import {NavLink, useParams} from "react-router-dom";
import {Layout} from "../../components/layout/layout";
import {useEffect, useState} from "react";

export const User = () => {
    const {idUser} = useParams();

    const [userToDo, getUserToDo] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/todos`)
            .then((response) => response.json())
            .then((json) => getUserToDo(json));
    }, [idUser])

    return (
        <Layout>
            <div>
                {userToDo?.map((userToDoValues) =>
                    <div >
                        <NavLink to={`/users/${idUser}/todo/${userToDoValues.id}`} >
                            {userToDoValues.title}
                        </NavLink>
                    </div>
                )}
            </div>
        </Layout>
    )
}