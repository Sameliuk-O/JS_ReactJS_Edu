export const getUsers = () =>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
}

export const getToDoes = () => {
   return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
}

export const getUserTodo = (idUser, idTodo) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/todos?id=${idTodo}`)
        .then((response) => response.json())
}

export const getUserToDoes = (idUser) => {
    return  fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/todos`)
        .then((response) => response.json())

}