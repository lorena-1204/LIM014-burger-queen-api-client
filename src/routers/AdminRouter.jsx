import {
    Link,
    // NavLink, 
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";

import Menu from "../pages/administrador/menu";
import Trabajadores from "../pages/administrador/trabajadores";

export default function AdministradorRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/administrador">Menu</Link>
                </li>
                <li>
                    <Link to="/administrador/trabajadores">Trabajadores</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`} component={Menu} />
                <Route exact path={`${url}/trabajadores`} component={Trabajadores} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}
