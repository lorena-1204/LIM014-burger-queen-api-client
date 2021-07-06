import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from '../components/Navbar';
import NotFoundPage from '../pages/NotFoundPage';

import LoginPage from '../pages/LoginPage';
import AdministradorRouter from './Roles/AdminRouter';
import RolRouter from './Roles/RolesRouter';

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={LoginPage} />

                <Route path="/administrador" component={AdministradorRouter} />

                <Route path="/rol" component={RolRouter} />

                <Route path="/404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
