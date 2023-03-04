import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";
import { getToDoes } from "../utils";

export const AllTodos = () => {
    const [allToDos, setAllToDos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState({
        completed: null,
        uncompleted: null,
    })
    const [searchToDoValue, setSearchToDoValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams([]);

    const isCompleted = filteredOptions.completed
    const isUnCompleted = filteredOptions.uncompleted

    useEffect(() => {
        getToDoes().then(data => setAllToDos(data)).catch((e) => {
            console.log(e)
        })
    }, [])

    const checkValue = (value, key) => {
        setFilteredOptions((prev) => (
            {...prev, [key]: value ? key === 'completed' : null})
        )
    }
    const searchToDo = (value) => {
        const searchTitleValue = allToDos?.filter(allToDo => (
            allToDo.title.includes(value)
        ))

        setSearchToDoValue(() => value);
        setFilteredTodos(searchTitleValue)

        let search;
        if (value) {
            search = {
                keyword: value
            }
        }

        setSearchParams(search);
    }

    useEffect(() => {
        const filteredData = allToDos?.filter((todo) =>
            (todo.completed === isCompleted || todo.completed === isUnCompleted)
        );

        setFilteredTodos(filteredData);

        if (filteredOptions.completed) {
            searchParams.set("completed", "1")
            if (searchParams.has('completed')) {
                searchParams.delete('completed');
            }
        } else {
            searchParams.set("uncompleted", "1")
            if (searchParams.has('uncompleted')) {
                searchParams.delete('uncompleted');
            }
        }

        setSearchParams(searchParams);

    }, [filteredOptions])


    return (
        <Layout>
            <div>
                <input id="completed" type="checkbox" name="completed" onChange={({target: {checked}}) => {
                    checkValue(checked, 'completed')
                }}/>
                <label htmlFor="completed" style={{margin: "10px 20px 0 0"}}>Completed </label>
                <input id="isPerformed" type="checkbox" name="isPerformed"
                       onChange={({target: {checked}}) => checkValue(checked, 'uncompleted')}/>
                <label htmlFor="isPerformed" style={{margin: "10px 20px 0 0"}}>Is Performed</label>

                <input id="searchTitle" type="text" name="searchTitle" value={searchParams.keyword}
                       onChange={({target: {value}}) => searchToDo(value)}/>
                <label htmlFor="searchTitle"> Search Title</label>
            </div>
            <div>
                {
                    (isCompleted !== null ||
                    isUnCompleted !== null ||
                    searchToDoValue !== "" ? filteredTodos : allToDos)?.map(({id, userId, title}) => (
                            <div className={"nav-block"} key={id}>
                                <NavLink to={`/users/${userId}/todo/${id}`}>
                                    {title}
                                </NavLink>
                            </div>
                        )
                    )
                }
            </div>
        </Layout>
    )
}