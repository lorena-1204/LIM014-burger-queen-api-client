import {
    Link,
    // NavLink, 
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

import Proceso from "../pages/cocina/proceso";
import HistorialCocina from "../pages/cocina/historialCocina";

export default function CocinaRouter() {
    const { url } = useRouteMatch();
    return (
        <div >
            <ul>
                <li>
                    <Link to="/cocina">Proceso</Link>
                </li>
                <li>
                    <Link to="/cocina/historial">Historial</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`} component={Proceso} />
                <Route exact path={`${url}/historial`} component={HistorialCocina} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}