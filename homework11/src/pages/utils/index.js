export const getUsers = (setState) =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setState(json));
}