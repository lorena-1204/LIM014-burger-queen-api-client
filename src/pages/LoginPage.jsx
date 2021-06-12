import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function LoginPage() {
    const history = useHistory(); /*nos permite navegar a otra página */
    const location = useLocation(); /*permite obtener informacion de la url ,nos ayuda a almacenar el location en la ruta anterior */
    // console.log (location);
    // console.log(location.state?.from); ?si el state es nulo va dar undefined
    /*➡trae la información del url⬆ u */
    const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/mesero")
        /*⬆ se envia a la ruta anterior pero si es undefined entonces se envia a mesero- el estado de las rutas anteriores solo se esta guardando en las rutas privadas*/
    }

    return (
        <section>
            <h1>Burguer Queen</h1>
            <form>
                <input type="email" placeholder='Usuario'></input> 
                <input type="password" placeholder='************'></input>
                <button onClick={handleLogin}>
                    Iniciar Sesión
                </button>
            </form>
         
        </section>
    )
}