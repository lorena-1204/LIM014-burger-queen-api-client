// import React from 'react'
// import { 
//     Link, 
//     NavLink 
// } from "react-router-dom";
// import useAuth from '../controller/useAuth';

// const Navbar = () => {
//     const auth = useAuth();
//     return (
//         <nav className="navigation">
//             <ul className="navigation__list">
                
//                 {!auth.isLogged() && (
//                     <>
//                         <li className="navigation__list__item">
//                             <NavLink exact to="/" className="active">
//                                 Login
//                             </NavLink>
//                         </li>
//                     </>
//                 )}

//                 {auth.isLogged() && (
//                     <>
//                        <li>
//                             <NavLink to="/rol" className="active"> Rol</NavLink>
//                         </li>

//                         <li>
//                             <Link to="/administrador" className="active"> Administrador</Link>
//                         </li>

//                         <li>
//                             <button className="button-default">Guardar</button>
//                             {/* <button 
//                             onClick={auth.logout}
                            
//                             >Salir</button> */}
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </nav>
//     )
// }
// export default Navbar


import React from 'react'
import {
    // Link,
    NavLink, useHistory
} from "react-router-dom";


const Navbar = () => {
    const history = useHistory();
    const Logout = () => {
        localStorage.removeItem('token');
        history.push("/")
    }
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                
                        <li className="navigation__list__item">
                            <NavLink exact to="/" className="active">
                                Login
                            </NavLink>
                        </li>
            
                        {/* <li>
                            <NavLink to="/rol" className="active"> Rol</NavLink>
                        </li>

                        <li>
                            <Link to="/administrador" className="active"> Administrador</Link>
                        </li> */}

                        <li>
                            <button 
                            onClick={Logout}
                            >
                                Salir
                            </button>
                        </li>
                   
            </ul>
        </nav>
    )
}
export default Navbar
