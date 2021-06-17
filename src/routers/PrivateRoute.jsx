import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../controller/auth/useAuthgit";
// import useAuth from "../auth/useAuth";

// const user = null;
// const user = {id: 1, username: "luis50"}
/*sed debe comprombar la autntificacion,  Se comprueba la autentificación, normalmente se enviaria una petición a la APi, verificar, si el toquen es valido o si las credenciales son válidas para generar el toquen que permita verificar que el usuario existe y guardar todo en un estado   */

/*se cambia el props de PrivateRoute para extraer el component y se desestructurta res que va a contener todos los componentes de las props pero no los que se deesctructa aca mismo como components 
...rest obtiene los atributos de las props */
export default function PrivateRoute({ component: Component, ...rest }) {
<<<<<<< HEAD
    const auth = useAuth(); /*retorna lo q se usa en el use Auth*/
    const location = useLocation(); /*tiene la informacion total de la ruta actual, al hacer la redireccion se ira al login pero en estado le indicaria la ruta anterior*/
=======
    const auth = useAuth(); /*retorna lo q se usa en el use Auth */
    const location = useLocation(); /** tiene la informacion total de la ruta actual, al hacer la redireccion se ira al login pero en estado le indicaria la ruta anterior*/
>>>>>>> 8a1c21769f2ec20338fe629a2eb67c18e29e498b

    return (
        /*se crea la ruta y se retorna
        <Route exact={props.exact} path ={props.path} component={props.component}/> =..rest, significa q hereda todos los componentes(datos) pero no los que se desestructuran asi mismo
       Se comprueba la autentificación, normalmente se enviaria una petición a la APi, verificar, si el toquen es valido o si las credenciales son válidas para generar el toquen 
      ⬇ Crea un componete para rutas privadas, si el usuario esta logeado se retorna el componente sino retorna el redirect, es decir lo redirecciona al login - 
       */
        <Route {...rest}>
            {auth.isLogged() ? (
                <Component />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: location } }} />
                
            )}
        </Route>
    );
}