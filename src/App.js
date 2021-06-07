import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/">
        Inicio
      </Link>
      <Link to="/nosotros">
        Nosotros
      </Link>
      <Link to="/contacto">
        Contacto
      </Link>
      <hr />
      <Switch>
      <Route path="/" exact>
        <Inicio />
        </Route>
        <Route path="/nosotros">
        <Nosotros />
        </Route>
        <Route path="/contacto">
         <Contacto />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
