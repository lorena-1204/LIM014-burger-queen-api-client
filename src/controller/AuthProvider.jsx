import { createContext, useState, useEffect } from "react";
// import decode from "jwt-decode";

export const AuthContext = createContext();

// export const isAuthenticated = (token) => {
//     const decoded = decode(token);
//     console.log("DESCIFRAR", decoded);

//     localStorage.setItem('token', decoded)
// }

const AuthProvider = ({ children }) => {

    // const decoded = decode(token)
    // console.log("DESCIFRAR", decoded);

    // const sesion = (token) => {
    //     localStorage.setItem("token", token)
    // }


    const [user, setUser] = useState(
        (localStorage.getItem("user")) || null
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

        /*Si se consumiera desde la API 
        1.se tendria que hacer la consulta, 
        2. verificar que la autentificación se realizo con exito. 
        3.la informacion del usuario que retorna es la q se colocaria en este estado 
        4. lo q se esta haciendo: llenar el estado con el contenido del usuario , se coloca en el app.js 

        - isLogged --> si el usuario es nulo entonces falso, pero si el usuario existe entonces es verdadero */
        user,
        login() {
            /*consumiento desde la APi, hacer la consulta verificar que la autentificacion se realizo con exito y luego la informacion se colocaria en lo que retorno el estado ultimo paso lo que esta en seyuSER, LLENAR EL estado con los datos  */
            setUser({ id: "", username: "" });
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        },
    };

    return (
        <AuthContext.Provider value=
        {contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;