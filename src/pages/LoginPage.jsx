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
        <Fragment>
            <p>Ingresa tu correo electrónico</p>
            <input id='txtEmail'></input>
            <p>Ingresa tu contraseña</p>
            <input id='txtPassword'></input>
            <button onClick={() => loginUser()} >Iniciar</button>
        </Fragment>
    );
}
export default LoginPage;