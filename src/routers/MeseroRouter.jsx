import { 
    Link, 
    // NavLink, 
    Switch, 
    Route, 
    Redirect, 
    useRouteMatch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

import Home from "../pages/mesero/home";
import Status from "../pages/mesero/status";
import HistorialMesero from "../pages/mesero/historialMesero";

export default function MeseroRouter() {
    const { url } = useRouteMatch();
    // {/* url=mesero */ }
    return (
        <div className='routeDiv' >
            <ul>
                <li>
                    <Link to="/mesero">Home</Link>
                </li>
                <li>
                    <Link to="/mesero/status">Status</Link>
                </li>
                <li>
                    <Link to="/mesero/historial">Historial</Link>
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
        </div>
    );
}