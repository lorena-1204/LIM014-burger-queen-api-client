import React from 'react'
import { Link, NavLink } from "react-router-dom";
import useAuth from '../controller/useAuth';


/*- to -> para que vaya al link.
- NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el ClassName="active" (19)
*/
const Navbar = () => {
    const auth = useAuth();
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                
                {!auth.isLogged() && (
                    <>
                        <li className="navigation__list__item">
                            <NavLink exact to="/" className="active">
                                Login
                            </NavLink>
                        </li>
                    </>
                )}

                {auth.isLogged() && (
                    <>
                        <li>
                            <NavLink to="/rol" className="active"> Rol</NavLink>
                        </li>

                        <li>
                            <Link to="/administrador" className="active"> Administrador</Link>
                        </li>

                        <li>
                            <button onClick={auth.logout}>Salir</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
export default Navbar
