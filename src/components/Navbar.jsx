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
                    <Link  to="/administrador"> Administrador</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar