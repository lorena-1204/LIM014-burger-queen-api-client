import {
    Link,
    // NavLink, 
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import HistorialMesero from "../../pages/mesero/historialMesero";
import Home from "../../pages/mesero/home";
import Status from "../../pages/mesero/status";
// import PrivateRoute from "./PrivateRoute";



export default function MeseroRouter() {
    const { url } = useRouteMatch();
    // {/* url=mesero */ }
    return (
        < >
            <ul>
                <li>
                    <Link to="/rol/mesero">Home</Link>
                </li>
                <li>
                    <Link to="/rol/mesero/status">Status</Link>
                </li>
                <li>
                    <Link to="/rol/mesero/historial">Historial</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${url}`} component={Home} />
                <Route exact path={`${url}/status`} component={Status} />
                <Route exact path={`${url}/historial`} component={HistorialMesero} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </>
    );
}