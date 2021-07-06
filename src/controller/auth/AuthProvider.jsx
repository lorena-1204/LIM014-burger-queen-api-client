import { createContext, useState, useEffect } from "react";
/*esta carpeta almacena el contexto,  cada vez que se actualice los datos se almace en el localstorage, se usa el useEffect ->reescribe el localstoge cada vez que el usuario cambie 
Auth Provider -> suministra el conexto de autentificación a los demás componentes
AuthContext -> sirve para consumer a los componentes que existen en este contexto
useEffect -> lo usamos para que cada vez que se actualice el  estado de usuario se almacenen los datos en el localstorage */
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // const dataProducts = 'http://localhost:5000/auth';

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        /* dato que almacena es el user pero tiene que ser un string JSON➡para q no  haya problemas ya que localstorage solo almacena string se pasa a traves del Json.string 
        ➡ JSON.string --> lo convierte en un string 
        ➡ JSON.parse--> convierte de cadena(string) a objeto*/
    );

    useEffect(() => {
        /*para prevenir fallos se usa el try Catch.comprueba quela instrucción se cumple de forma correcta, de no comprobarse se elimina el item del localstorage através del remove item para que no cree conflictos*/
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem("user");
            console.log(error);
        }
        /*⬆ recibe una funcion que se ejecuta cada vez que el usuario cambie, se reescribe el localstorage, lo que tenemos en el usuario debe ser un string porque eso almacema el localstorage.*/
    }, [user]);

    const contextValue = {
        /*Si se consumiera desde la API 
        1.se tendria que hacer la consulta, 
        2. verificar que la autentificación se realizo con exito. 
        3.la informacion del usuario que retorna es la q se colocaria en este estado 
        4. lo q se esta haciendo: llenar el estado con el contenido del usuario , se coloca en el app.js 
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