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
                
                localStorage.setItem('token', res.token)
                
                const decoded = decode(res.token);
                console.log("DESCIFRAR", decoded);

                

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

// import { useHistory, useLocation } from 'react-router-dom';
// import useAuth from '../controller/auth/useAuth';

// export default function LoginPage() {
//     const history = useHistory(); /*nos permite navegar a otra página */
//     const location = useLocation(); /*permite obtener informacion de la url ,nos ayuda a almacenar el location en la ruta anterior */
//     // console.log (location);
//     // console.log(location.state?.from); ?si el state es nulo va dar undefined
//     /*➡trae la información del url⬆ u */
//     const previusObjectURL = location.state?.from;

//     const auth = useAuth();
//     const handleLogin = () => {
//         auth.login();
//         history.push(previusObjectURL || "/mesero")
//         /*⬆ se envia a la ruta anterior pero si es undefined entonces se envia a mesero- el estado de las rutas anteriores solo se esta guardando en las rutas privadas*/
//     }

//     return (
//         <section className="page-login">

//             <div className="login-form">
//                 <h1 className="login-form__title">Burguer Queen</h1>
//                 <form className="login-form__form" autoComplete="off">
//                     <div className="login-form__form__input-group">
//                         <input className="input-default"  type="email" placeholder='Usuario'></input>
//                         <input className="input-default"  type="password" placeholder='Password'></input>
//                         <button className="button-default" onClick={handleLogin}>
//                         Iniciar Sesión
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }