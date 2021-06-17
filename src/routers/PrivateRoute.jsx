import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

// const user = null;
// const user = {id: 1, username: "luis50"}

/*se cambia el props de PrivateRoute para extraer el component y se desestructurta res que va a contener todos los componentes de las props pero no los que se deesctructa aca mismo como components */
export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = useAuth(); /*retorna lo q se usa en el use Auth */
    const location = useLocation(); /** tiene la informacion total de la ruta actual, al hacer la redireccion se ira al login pero en estado le indicaria la ruta anterior*/

    return (
        /*<Route exact={props.exact} path ={props.path} component={props.component}/> =..rest, significa q hereda todos los componentes(datos) pero no los que se desestructuran asi mismo
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