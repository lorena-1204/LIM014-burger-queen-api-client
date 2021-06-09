import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from '../components/Navbar';
import Inicio from '../pages/inicio';
import Mesero from '../pages/mesero';
import Cocina from '../pages/cocina';
import Administrador from '../pages/administrador';
import NotFound from '../pages/NotFound';

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
    return(
       <Router>
            <Navbar />
           <Switch>
               <Route exact path="/" component={Inicio} />
               <Route exact path="/mesero" component={Mesero}/>
               <Route exact path="/cocina" component={Cocina} />
               <Route exact path="/administrador" component={Administrador} />
               <Route exact path="*" component={NotFound} />

                {/* <Route path="/administrador">
                    <Administrador/>
                </Route> */}
           </Switch>
       </Router>
    );
}

export default AppRouter;