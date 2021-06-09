import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from '../components/Navbar';
import Inicio from '../pages/inicio';
import Mesero from '../pages/mesero';
import Cocina from '../pages/cocina';
import Administrador from '../pages/administrador';
import NotFound from '../pages/NotFound';
import ProfilePage from '../pages/ProfilePage';
import Categories from '../pages/Categories';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import Payments from '../pages/payments';
import PrivateRoute from './PrivateRoute';


/* Approuter-> se va a encargar de renderizar los componentes de una pagina de acuerdo a la url que solicite el usuario
   Route ->llamar a los componentes y se define las rutas de la aplicación.
    - /->para mostrar ruta raíz
    - Path -> se declara la ruta.
    - Switch -> Contenido dinamico, sirve para que se cargue solo una ruta a la vez.Se declara de lo más especifico a lo más general o se trabaja con:
    - exact -> para indicar q ruta va.
    * accede a todas las rutas 
    - Navbar, menú para que se acceda entre rutas 
    *ruta con parametros: cuando se vaya a un usuario en especifico username =parametro 
    - ctrl + espacio = autoimportar ruta
 */

function AppRouter(){
    return(
       <Router>
            <Navbar />
           <Switch>
               <Route exact path="/" component={Inicio} />
               <Route exact path="/mesero" component={Mesero}/>
               <Route exact path="/cocina" component={Cocina} />
               <Route exact path="/administrador" component={Administrador} />

                <Route exact path="/profile/:username" component={ProfilePage} />
                <Route exact path="/categories" component={Categories} />
                

                <Route exact path="/signgin" component={Login}>
                    <Redirect to="/login" />
                    </Route> 
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                
                {/* Crear un componente particular basado en la ruta - pero que sea para rutas privadas ⬇ */}
                <PrivateRoute exact path="/dashboard" component={Dashboard} /> 
                {/* ´contiene 3 atributos ⬆ */}
                <Route exact path="/payments" component={Payments} />

               <Route exact path="*" component={NotFound} />

                {/* <Route path="/administrador">
                    <Administrador/>
                </Route> */}
           </Switch>
       </Router>
    );
}

export default AppRouter;