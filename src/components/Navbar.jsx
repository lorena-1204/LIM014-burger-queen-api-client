import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

/*- to -> para que vaya al link.
- NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el ClassName="active" (19)
*/
const Navbar = () => {
    const auth = useAuth();

    return (
        <nav>
            <ul>
                {/* Para restringir ⬇ rutas, si el usuario no  esta logeado se muestra lossiguientes elmentos*/}
               
                {!auth.isLogged() && (
                    <>
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                Login
                             </NavLink>
                        </li>
                        
                    </>
                )}

                <li>
                    <NavLink to="/categories" activeClassName="active">
                        Categories
                     </NavLink>
                </li>
                {/* Para restringir ⬇ rutas, si el usuario esta logeado se muestra los elmentos:*/}
                {auth.isLogged() && (
                    <>
                        <li>
                            <NavLink exact to="/dashboard" activeClassName="active">
                                Dashboard
                             </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/payments" activeClassName="active">
                                Payments
                             </NavLink>
                        </li>
                        <li>
                            <button onClick={auth.logout}>Cerrar Sesión</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar
