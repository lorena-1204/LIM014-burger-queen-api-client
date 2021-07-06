import { urlApi } from "./url";

export const getUser = async () => {
    const response = await fetch(`${urlApi}/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })
    console.log("CUERPO USER", response);

    const dataJSON = await response.json();

    return dataJSON
}

export const postUser = async (user) => {
    const response = await fetch(`${urlApi}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    console.log("CUERPO USER", response);

    const dataJSON = await response.json();

    return dataJSON
}
