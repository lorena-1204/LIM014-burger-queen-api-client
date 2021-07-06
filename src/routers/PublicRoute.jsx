import { Route, Redirect } from "react-router-dom";
import useAuth from "../controller/useAuth";


/*se muestra solo si no esta logeado */
export default function PublicRoute({ component: Component, ...rest }) {
    const auth = useAuth();

    return (
        <Route {...rest}>
            {!auth.isLogged() ? (
                <Component />
            ) : (
                <Redirect to="/" />
            )}
            {/*si el usuario no esta autenticado se muestra el componente de lo contrario se va a redireccionar a  otra url ej login */}
        </Route>
    );
}