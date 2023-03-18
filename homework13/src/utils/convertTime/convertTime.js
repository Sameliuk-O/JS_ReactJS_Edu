export const convertTime = (time) => {
    return new Date(time * 1000).toLocaleString()
}