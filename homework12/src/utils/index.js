export const getUserData = () => {
    return fetch(`https://swapi.dev/api/people/`)
        .then((response) => response.json())
}