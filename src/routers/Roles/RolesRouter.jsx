
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
                <li>
                    <Link exact to={`${url}`}>
                       
                    </Link>
                </li>
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

// function cocinaRouter() {
//     const { url } = useRouteMatch();

//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/rol/cocina">All</Link>
//                 </li>
//                 <li>
//                     <Link to="/rol/cocina/gore">Gore</Link>
//                 </li>
//                 <li>
//                     <Link to="/rol/cocina/suspense">Suspense</Link>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path={`${url}`}>
//                     <h3>Category cocina</h3>
//                 </Route>
//                 <Route exact path={`${url}/gore`}>
//                     <h3>Gore</h3>
//                 </Route>
//                 <Route exact path={`${url}/suspense`}>
//                     <h3>Suspense</h3>
//                 </Route>
//                 <Route path="*">
//                     <Redirect to="/404" />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }