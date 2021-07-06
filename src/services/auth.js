import { urlApi } from "./url";

export const postAuth = async (email, password) => {
    const response = await fetch(`${urlApi}/auth`, {
        method: 'POST',
        body:
            JSON.stringify
                ({
                    email,
                    password
                }),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log("CUERPO", response);

    const dataJSON = await response.json();

    // return dataJSON
    if (response.status === 200) {
        return dataJSON;
    } else if (response.status === 400) {
        // throw new Error('error de acceso');
        alert('Error de acceso')
    }
}
