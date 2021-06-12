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
        <section className="page-login">

            <div className="login-form">
                <h1 className="login-form__title">Burguer Queen</h1>
                <form className="login-form__form" autocomplete="off">
                    <div className="login-form__form__input-group">
                        <input className="input-default"  type="email" placeholder='Usuario'></input>
                        <input className="input-default"  type="password" placeholder='Password'></input>
                    </div>

                    <button className="button-default" onClick={handleLogin}>
                        Iniciar Sesión
                    </button>

                </form>
            </div>


        </section>
    )
}