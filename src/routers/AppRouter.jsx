import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from '../components/Navbar';
import Administrador from '../pages/administrador';
import Mesero from '../pages/mesero';
import Cocina from '../pages/cocina';
import NotFound from '../pages/NotFoundPage';

import LoginPage from '../pages/LoginPage';


function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/mesero" component={Mesero} />
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