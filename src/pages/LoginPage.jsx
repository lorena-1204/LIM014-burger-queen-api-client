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
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

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

                console.log("QUE ERES", res);
                console.log("QUE ERES PART II EL REGRESO DEL TOKEN", res.token);
                
                const decoded = decode(res.token);
                console.log("DESCIFRAR", decoded);

                localStorage.setItem('token',decoded)
                
                //  if (res.statusText === 200){

                //      console.log('postAuth',res.data.token);
                //      console.log('post', res);

                //     // startSession(res.data.token)
                //     // console.log("rol",role);

                //     //  if (role) {
                //     //     console.log(role);
                //     //      history.push("/administrador")
                //     //  }

                //     //  else if (role === false){
                //     //  console.log(role);
                //     //  history.push("/rol")
                //     //  }
                // }

            })

        // try {
        //     const { token } = await postAuth(login);

        //     localStorage.setItem('token', token);
        // } catch (error) {
        //     document.getElementById('error').textContent = error;
        // }

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
