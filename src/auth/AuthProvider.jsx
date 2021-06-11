import { createContext, useState, useEffect } from "react";
/*esta carpeta almacena el contexto,  cada vez que se actualice los datos se almace en el localstorage, se usa el useEffect ->reescribe el localstoge cada vez que el usuario cambie */

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        /* dato que almacena es el user pero tiene que ser un string JSON➡para q no  haya problemas ya que localstorage solo almacena string se pasa a traves del Json.string 
        ➡JSON.string,lo convierte en un string 
        ➡JSON.parse, convierte de cadena(string) a objeto*/
    );

    useEffect(() => {
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem("user");
            console.log(error);
        }
        /*⬆ comprueba quela instrucción se cumple de forma correcta, de no comprobarse se elimina el item del localstorage através del remove item para que no cree conflictos*/
    }, [user]);

    const contextValue = {
        user,
        login() {
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