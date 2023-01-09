import {useEffect, useState} from "react";
import {Layout} from "../../components/layout/layout";
import {NavLink, useSearchParams} from "react-router-dom";


export const AllToDos = () => {
    const [allToDos, setAllToDos] = useState();
    const [filteredTodos, setFilteredTodos] = useState();
    const [filteredOptions, setFilteredOptions] = useState({
        completed: null,
        uncompleted: null,
    })
    const [searchToDoValue, setSearchToDoValue] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setAllToDos(json));
    }, [])

    const checkValue = (value, key) => {

        if (value) {
            setFilteredOptions((prev) => ({...prev, [key]: key === 'completed'}))

        } else {
            setFilteredOptions((prev) => ({...prev, [key]: null}));

        }
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
            console.log(value)
        } else {
            search = undefined;
            console.log(value)
        }


        setSearchParams(search);
    }


    useEffect(() => {
        const filteredData = allToDos?.filter((todo) => (todo.completed === filteredOptions.completed || todo.completed === filteredOptions.uncompleted));

        setFilteredTodos(filteredData);


        if (filteredOptions.completed !== null) {
            console.log(filteredOptions.completed)
            searchParams.set("completed", 1)

        } else {
            if (searchParams.has('completed')) {
                searchParams.delete('completed');
            }

        }
        if (filteredOptions.uncompleted !== null) {
            searchParams.set("uncompleted", 1)

        } else {
            if (searchParams.has('uncompleted')) {
                searchParams.delete('uncompleted');
            }
            console.log(1)
        }
        setSearchParams(searchParams);


    }, [filteredOptions])


    return (
        <Layout>
            <div>
                <input type="checkbox" name="completed" onChange={(e) => checkValue(e.target.checked, 'completed')}/>
                <label htmlFor="completed" style={{margin:"10px 20px 0 0"}}>Completed </label>
                <input type="checkbox" name="isPerformed"
                       onChange={(e) => checkValue(e.target.checked, 'uncompleted')}/>
                <label htmlFor="isPerformed" style={{margin:"10px 20px 0 0"}}>Is Performed</label>

                <input type="text" name="searchTitle" value={searchParams.keyword}
                       onChange={(e) => searchToDo(e.target.value)}/>
                <label htmlFor="searchTitle" > Search Title</label>
            </div>
            <div>
                {(filteredOptions.completed !== null || filteredOptions.uncompleted !== null || searchToDoValue !== "" ? filteredTodos : allToDos)?.map((allToDo) =>
                    <div className={"nav-block"} key={allToDo.id}>
                        <NavLink to={`/users/${allToDo.userId}`}>
                            {allToDo.title}
                        </NavLink>
                    </div>
                )}
            </div>
        </Layout>
    )
}