import {
    Link,
    // NavLink, 
    Switch,
    Route,
    Redirect,
    // useRouteMatch
} from "react-router-dom";

import Menu from "../../pages/administrador/menu";
import Trabajadores from "../../pages/administrador/trabajadores";

export default function AdministradorRouter() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/administrador">Menu</Link>
                </li>
                <li>
                    <Link to="/administrador/trabajadores">Trabajadores</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/administrador" component={Menu} />
                <Route exact path="/administrador/trabajadores" component={Trabajadores} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </>
    )
}
