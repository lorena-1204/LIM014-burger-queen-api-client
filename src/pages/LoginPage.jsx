import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    /*➡trae la información del url⬆ u mps ayuda a almacenar el location de la ruta anterior*/
    const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/mesero")
        // se envia ala url anterior⬆
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