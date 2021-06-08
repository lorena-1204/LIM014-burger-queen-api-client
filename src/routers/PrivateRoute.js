import React from 'react'
import { Route, 
    // Redirect, 
    // useLocation 
} from "react-router-dom";
// import useAuth from "../auth/useAuth";

const user = null;
const user ={id:1,username:"l"}

const PrivateRoute = (props) => {
    return (
        // <Route exact={props.exact} path ={props.path} component={props.component}/>
        /* Se comprueba la autentificación, normalmente se enviaria una petición a la APi, verificar, si el toquen es valido o si las credenciales son válidas para generar el toquen */
        <Route {...props}/>
    )
}

export default PrivateRoute
