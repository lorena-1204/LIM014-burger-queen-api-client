import React from 'react'
import { Link, NavLink } from "react-router-dom";

/*- to -> para que vaya al link.
- NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el ClassName="active" (19)
*/
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" className="active"> Login</NavLink>
                </li>
                <li>
                    <NavLink to="/rol" className="active"> Rol</NavLink>
                </li>

                <li>
                    <Link to="/administrador"> Administrador</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

// import {
//     // Link,
//     NavLink
// } from "react-router-dom";
// import useAuth from "../controller/auth/useAuth";
// // import useAuth from "../auth/useAuth";

// /*- to -> para que vaya al link.
// - NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el ClassName="active" (19)
// */
// const Navbar = () => {
//     const auth = useAuth();

//     return (
//         <nav className="navigation">

//             <ul className="navigation__list">
//                 {/* Para restringir ⬇ rutas, si el usuario no  esta logeado se muestra lossiguientes elmentos*/}

//                 {!auth.isLogged() && (
//                     <>
//                         <li className="navigation__list__item">
//                             <NavLink exact to="/" className="active">
//                                 Login
//                             </NavLink>
//                         </li>

//                     </>


//                 )}

//                 {/*  como son varios elementos y solo se puede retornar un se usa:   <>  </> ->> es un fragmente que envuelve a los elementos
//                Para restringir ⬇ rutas, si el usuario esta logeado se muestra los elmentos:*/}
//                 {auth.isLogged() && (
//                     <>
//                         <li>
//                             <NavLink to={`/mesero`} className="active">
//                                 Mesero
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to={`/cocina`} className="active">
//                                 Cocina
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink exact to={`/administrador`} className="active">
//                                 Administrador
//                             </NavLink>
//                         </li>

//                         <li>
//                             <button onClick={auth.logout}>Salir</button>
//                         </li>

//                     </>
//                 )}
//             </ul>


//         </nav>
//     );
// }

// export default Navbar
