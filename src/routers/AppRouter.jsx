import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import CategoriesRouter from "./CategoriesRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";



/* Approuter-> se va a encargar de renderizar los componentes de una pagina de acuerdo a la url que solicite el usuario
   Route ->llamar a los componentes y se define las rutas de la aplicación.
    - /->para mostrar ruta raíz
    - Path -> se declara la ruta.
    - Switch -> Contenido dinamico, sirve para que se cargue solo una ruta a la vez.Se declara de lo más especifico a lo más general o se trabaja con:
    - exact -> para indicar q ruta va.
    * accede a todas las rutas 
    - Navbar, menú para que se acceda entre rutas 
 */

function AppRouter(){
    return (
        <Router>
            <Navbar />
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <Route exact path="/profile/:username" component={ProfilePage} />

                <Route path="/categories" component={CategoriesRouter} />
                {/* <Route path="/administrador">
                    <Administrador/>
                </Route> */}

                <Route exact path="/signin">
                    <Redirect to="/" />
                </Route>


                <PrivateRoute exact path="/dashboard" component={DashboardPage} />

                <PrivateRoute exact path="/payments" component={PaymentsPage} />

                <Route path="/404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;