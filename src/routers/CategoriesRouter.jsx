import {
    Link,
    NavLink,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";


export default function CategoriesRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    {/* url=categories, administrador = categorias  */}
                    <NavLink exact to={`${url}`} activeClassName="active">
                        Administrador
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/mesero`} activeClassName="active">
                        Mesero
                     </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/cocina`} activeClassName="active">
                        Cocina
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <PrivateRoute exact path="/categories" component={CategoriesPage} />
                <PrivateRoute path="/categories/mesero" component={MeseroRouter} />

                <Route exact path="/categories/cocina">
                    <h1>Puesto: Cocinero</h1>
                </Route>
            

                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}

function MeseroRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/categories/mesero">Home</Link>
                </li>
                <li>
                    <Link to="/categories/mesero/status">Status</Link>
                </li>
                <li>
                    <Link to="/categories/mesero/historial">Historial</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`}>
                    <h3>Home</h3>
                </Route>
                <Route exact path={`${url}/status`}>
                    <h3>Status</h3>
                </Route>
                <Route exact path={`${url}/historial`}>
                    <h3>Historial</h3>
                </Route>
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}