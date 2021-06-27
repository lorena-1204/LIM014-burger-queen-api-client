import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { urlApi } from "./URL";

/*permite acceder al contexto
par consumir el contexto se llama al useContext y se pasa el contexto que se quiere consumir en nuestro caso es AUthContextot
- AuthProvider--> dotar a la aplicación como tal de un proveer, lo que se consume es el contexto
- useContext --> es un hook, cuando lo utilizamos devuelve los valores que se trae del contexto( en nuestro caso el contextValue, el objet q trae el user, el login y logout )   */


export function useAuth() {
    const contextValue = useContext(AuthContext);
    return contextValue;
}

//  export default function useAuth() {
//    return useContext(AuthContext);
//  }

export const postAuth = async (email, password) => {
    const response = await fetch(`${urlApi}/auth`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response.body);

    const dataJSON = await response.json();
    return dataJSON

        // if(response.status ===200){return dataJSON;
        // }
        // if (response.status === 400) {
        //     return Promise.reject('El email y password son requeridos');
        // }

        .then((response) => {
            if (response.status === 200) {
                return dataJSON;
            } if (response.status === 400) {
                return Promise.reject('El email y password son requeridos');
            }
        })
}