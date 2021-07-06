import { useState } from "react";
import { postAuth } from "../services/auth";

import decode from "jwt-decode";
import { useHistory } from "react-router-dom";

/********** login  ************/
export default function LoginPage() {
    const history = useHistory();
    // const auth = useAuth(); /*cONtexto */
    // const { startSession, role } = auth

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    })
    // const [email, setEmail] = useState('');   const [password, setPassword] = useState('');

    const handleChange = (e) => {
        console.log(`Actualizar la variable de estado`);
        //    ( setEmail, setPassword)
        setFormLogin
            ({
                ...formLogin, /* EMAIL, PASSWORD */
                [e.target.name]: e.target.value
            })
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("FORM", formLogin);

        postAuth(formLogin.email, formLogin.password)
            .then(res => {
                // console.log("lll", postAuth);

                console.log("QUE ERES", res);
                console.log("QUE ERES PART II EL REGRESO DEL TOKEN", res.token);

                const decoded = decode(res.token);
                console.log("DESCIFRAR", decoded);

                localStorage.setItem('token', decoded)

                if (decoded.roles.admin) {
                    console.log("TRUE", decoded.roles.admin);
                    history.push("/administrador")
                }

                else if (decoded.roles.admin === false) {
                    console.log("FALSE", decoded.roles.admin);
                    history.push("/rol")
                }
            })

    }

    return (
        <section className="page-login">

            <div className="login-form">

                <h1 className="login-form__title"> Burguer Queen </h1>

                <form
                    className="login-form__form"
                    autoComplete="off"
                    onSubmit={handleLogin}>

                    <div className="login-form__form__input-group">
                        <input className="input-default"
                            type="email"
                            name="email"
                            placeholder='Usuario'
                            onChange={handleChange}
                            // value={email.email}
                            value={formLogin.email}
                        />
                        <input className="input-default"
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={handleChange}
                            // value={password.password}
                            value={formLogin.password}
                        />

                    </div>

                    <button className="button-default"
                        type="submit"
                    // onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button>

                </form>
            </div>

        </section>
    )
}
