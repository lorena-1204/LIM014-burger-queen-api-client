import React, { Fragment, useState, useEffect } from 'react';
import { urlApi } from "./url"

function LoginPage() {
    const [token, setToken] = useState({});
    // HOOKS - setToken: Es el método creado con useState que sirve para cambiar el valor de la variable token, que se encuentra en el estado
    //  const [admin, setAdmin] = useState(true);    
    const loginUser = () => {
        const fetchData = async () => {
            const result = await fetch.post(
                `${urlApi}/auth`,
                {
                    email: document.getElementById('txtEmail').value,
                    password: document.getElementById('txtPassword').value,
                }
            ).catch((error) => {
                alert("Error de acceso");
            });

            if (result !== undefined) {
                // const responseJSON = await result.json()
                // setToken(responseJSON.token);
                // localStorage.setItem('token', responseJSON.token);

                setToken(result.data.token);
                localStorage.setItem('token', result.data.token);
            }
        };
        fetchData();
    }
    useEffect(() => {  //Se lanza cada vez que se cambia el estado 
        console.log("estado", token);
    });

    return (

        <section className="page-login">

            <div className="login-form">
                <h1 className="login-form__title">Burguer Queen</h1>
                <form className="login-form__form" autoComplete="off">
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

