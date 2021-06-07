import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from './components/contacto';
import Inicio from './components/inicio';
import Nosotros from './components/nosotros';

/* to ->  para que vaya al link.
   Switch -> Contenido dinamico.
   Path -> se declara la ruta. 
   Route ->llamar a los componentes.
-> Se declara de lo más especifico a lo más general o se trabaja con 
   exact -> para indicar q routa va primero
   NavLink -> Reemplasa a link y llama una clase activa */

function App() {
  return (
    <Router>
      <div className ="container">
        <div className ="btn-group">
          <Link to ="/" className="btn btn-dark"> 
          Inicio
          </Link>

          <Link to="/nosotros" className="">
           Nosotros
          </Link>

          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
        </div>
       <h1> hi ... </h1>
       <hr/>

       <Switch>
       
        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/nosotros">
          <Nosotros />
        </Route>

        <Route path="/">
            <Inicio />
          
        </Route>
         
       </Switch>

     </div>
    </Router>
    
  );
}

export default App;
