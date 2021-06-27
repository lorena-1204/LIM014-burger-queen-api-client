
import {
    Link,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom";

export default function RolRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link exact to={`${url}`}>
                        Cocina
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/mesero`} >
                       Mesero
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/rol" component={CategoriesPage} />
                <PrivateRoute path="/rol/cocina" component={cocinaRouter} />

                <Route exact path="/rol/action">
                    <h1>Category Action</h1>
                </Route>
                <Route exact path="/rol/anime">
                    <h1>Category Anime</h1>
                </Route>

                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}

function cocinaRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/rol/cocina">All</Link>
                </li>
                <li>
                    <Link to="/rol/cocina/gore">Gore</Link>
                </li>
                <li>
                    <Link to="/rol/cocina/suspense">Suspense</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`}>
                    <h3>Category cocina</h3>
                </Route>
                <Route exact path={`${url}/gore`}>
                    <h3>Gore</h3>
                </Route>
                <Route exact path={`${url}/suspense`}>
                    <h3>Suspense</h3>
                </Route>
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}