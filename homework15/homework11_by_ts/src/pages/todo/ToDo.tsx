import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Layout} from "../../components/layout/Layout";
import {TodoProps} from "../../models/todos";

export const ToDo = () => {
    const {idUser, idToDo} = useParams()

    const [toDo, getToDo] = useState<Array<TodoProps>>([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/todos?id=${idToDo}`)
            .then((response) => response.json())
            .then((json) => getToDo(json));
    }, [])

    return (
        <Layout>
            {toDo?.map((toDoValues) =>
                <div key={`todo-${toDoValues.id}`}>
                    <span>Name</span>

                    <h1>
                        {toDoValues.title}
                    </h1>
                    <p>Status</p>
                    <p>{toDoValues.completed ? "Completed" : "Is Performed"}</p>
                </div>
            )}
        </Layout>

    )
}