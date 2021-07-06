import {
    Link,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import Roles from "../../pages/roles";
import CocinaRouter from "./CocinaRouter";

import MeseroRouter from "./MeseroRouter";

export default function RolRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                {/* <li>
                    <Link exact to={`${url}`}>
                       
                    </Link>
                </li> */}
                <li>
                    <Link to={`${url}/mesero`} >
                        Mesero
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/cocina`} >
                        Cocina
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/rol" component={Roles} />

                <Route path="/rol/mesero" component={MeseroRouter} />

                <Route path="/rol/cocina" component={CocinaRouter} />


                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}