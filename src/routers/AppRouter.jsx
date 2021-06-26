import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from '../components/Navbar';
import Administrador from '../pages/administrador';
import Inicio from '../pages/inicio';
import Mesero from '../pages/mesero';
import Cocina from '../pages/cocina';
import NotFound from '../pages/NotFoundPage';
import ProfilePage from '../pages/ProfilePage';


function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/mesero" component={Mesero} />
                <Route exact path="/cocina" component={Cocina} />
                <Route exact path="/administrador" component={Administrador} />

                <Route exact path="/profile/:username" component={ProfilePage} />

                <Route exact path="*" component={NotFound} />

                {/* <Route path="/administrador">
                    <Administrador/>
                </Route> */}
            </Switch>
        </Router>
    );
}

export default AppRouter;