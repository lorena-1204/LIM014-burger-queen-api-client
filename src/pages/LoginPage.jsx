import { useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import { postAuth } from "../services/auth/auth";


export default function LoginPage(/*{history}*/) {
    
    // const auth = useAuth(); /*cONtexto */

    // const { startSession, role } = auth

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleChange = (e) =>{
        console.log(`Actualizar la variable de estado`);
    //    ( setEmail, setPassword)
        setLogin
        ({
            ...login,
            // email,
            // password,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("form",login);

        postAuth(login.email, login.password)
        
         .then(res => {
            console.log("que eres", res);

            // if (res.statusText === "OK"){
               
            //     console.log('postLogin',res.data.token);

            //     startSession(res.data.token)
            //     console.log("rol",role);

            //     if (role) {
            //         console.log(role);
            //         history.push("/administrador")
            //     }

            //     else if (role === false){
            //         console.log(role);
            //         history.push("/rol")
            //     }
            // }

        })

        try {
            const { token } = await postAuth(login);

            localStorage.setItem('token', token);
            // history.push('/home');
        } catch (error) {
            document.getElementById('error').textContent = error;
        }
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
                            value={login.email}
                            />
                        <input className="input-default" 
                        type="password" 
                        name="password"
                        placeholder='Password'
                            onChange={handleChange}
                            // value={password.password}
                            value={login.password}
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



