import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";
import { getUserTodo } from "../utils";

export const Todo = () => {
    const {idUser, idTodo} = useParams()
    const [todo, setTodo] = useState()

    useEffect(() => {
        getUserTodo(idUser, idTodo).then(data => setTodo(data)).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <Layout>
            {todo?.map(({id, title, completed}) =>
                <div key={id}>
                    <span>Name</span>
                    <h1>
                        {title}
                    </h1>
                    <p>Status</p>
                    <p>{completed ? "Completed" : "Is Performed"}</p>
                </div>
            )}
        </Layout>
    )
}