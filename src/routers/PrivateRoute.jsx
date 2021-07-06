import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../controller/useAuth";


export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = useAuth(); /*retorna lo q se usa en el use Auth */
    // const location = useLocation(); /** tiene la informacion total de la ruta actual, al hacer la redireccion se ira al login pero en estado le indicaria la ruta anterior*/

    return (
       
        <Route {...rest}>
            {auth.isLogged() ? ( <Component /> ) : (
                // <Redirect to={{ pathname: "/", state: { from: location } }} />
                <Redirect to= "/"/>
            )}
            
            {/* si el usuario existe redireccionar */}
            {/* {auth.isLogged() ? (
                <Component />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: location } }} />
                // <Redirect to= "/"/>
            )} */}
        </Route>
    );
}