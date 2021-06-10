import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    /*➡trae la información del url⬆ */
    const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/dashboard")
        // se envia ala url anterior⬆
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                Iniciar Sesión
            </button>
        </div>
    )
}