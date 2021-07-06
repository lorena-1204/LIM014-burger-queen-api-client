import {
    Link,
    // NavLink, 
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import HistorialCocina from "../../pages/cocina/historialCocina";
import Proceso from "../../pages/cocina/proceso";

// import PrivateRoute from "./PrivateRoute";



export default function CocinaRouter() {
    const { url } = useRouteMatch();
    // {/* url=cocina */ }
    return (
        < >
            <ul>
                <li>
                    <Link to="/rol/cocina">Proceso</Link>
                </li>
                <li>
                    <Link to="/rol/cocina/historial">Historial</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${url}`} component={Proceso} />
                <Route exact path={`${url}/historial`} component={HistorialCocina} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </>
    );
}
