import { createContext, useState, useEffect } from "react";
import { urlApi } from "./url";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem("user");
            console.log(error);
        }
        /*⬆ recibe una funcion que se ejecuta cada vez que el usuario cambie, se reescribe el localstorage, lo que tenemos en el usuario debe ser un string porque eso almacema el localstorage.*/
    }, [user]);


//informacion que se pasa a los demas componente
    const contextValue = {

        /*Si se consumiera desde la API 1.se tendria que hacer la consulta, 2. verificar que la autentificación se realizo con exito. 3.la informacion del usuario que retorna es la q se colocaria en este estado 4. lo q se esta haciendo: llenar el estado con el contenido del usuario , se coloca en el app.js 
        - isLogged --> si el usuario es nulo entonces falso, pero si el usuario existe entonces es verdadero */
        user,
        login() {
            /*consumiento desde la APi, hacer la consulta verificar que la autentificacion se realizo con exito y luegola informacion se colocaria en lo que retorno el estado ultimo paso lo que esta en seyuSER, LLENAR EL estado con los datos  */
            setUser({ id: 1, username: "luis50" });
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        },
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;