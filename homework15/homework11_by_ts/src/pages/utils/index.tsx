export const getUsers = (setState: (users: Array<any>) => void) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setState(json));
}