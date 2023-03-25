import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";

import {Layout} from "../../components/layout/Layout";
import {TodoProps} from "../../models/todos";

export const User = () => {
    const {idUser} = useParams();
    const [userToDo, getUserToDo] = useState<Array<TodoProps>>([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/todos`)
            .then((response) => response.json())
            .then((data: Array<TodoProps>) => getUserToDo(data));
    }, [idUser])

    return (
        <Layout>
            <div>
                {userToDo?.map((userToDoValues: TodoProps) =>
                    <div key={`userToDoValues-${userToDoValues.id}`}>
                        <NavLink to={`/users/${idUser}/todo/${userToDoValues.id}`}>
                            {userToDoValues.title}
                        </NavLink>
                    </div>
                )}
            </div>
        </Layout>
    )
}