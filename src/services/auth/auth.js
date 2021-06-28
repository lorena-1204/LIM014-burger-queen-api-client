import { urlApi } from "../url";

export const postAuth = async (email, password) => {
    const response = await fetch(`${urlApi}/auth`, {
        method: 'POST',
        body: JSON.stringify({ 
            email, 
            password 
            // email: document.getElementById('txtEmail').value,
            // password: document.getElementById('txtPassword').value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    
    // console.log(response.body);

    const dataJSON = await response.json();
    return dataJSON

     .then((response) => {
         if (response.status === 200) {
             return dataJSON;
         } if (response.status === 400) {
             return Promise.reject('El email y password son requeridos');
         }
     })
}


// import React, {
//     Fragment,
//     useState,
//     useEffect
// } from 'react';
// import { urlApi } from '../services/url';

// const LoginPage = () => {

//     const [token, setToken] = useState({});
//     /* setToken: (hooks) Es el método creado con useState que sirve para cambiar el valor de la variable token que se encuentra en el estado*/

//     //  const [admin, setAdmin] = useState(true);

//     const loginUser = () => {

//         const fetchData = async () => {
//             const result = await fetch.post(
//                 `${urlApi}/auth`,
//                 {
//                     email: document.getElementById('txtEmail').value,
//                     password: document.getElementById('txtPassword').value,
//                 }
//             ).catch((error) => {

//                 alert("Error de acceso");

//             });

//             if (result !== undefined) {
//                 const responseJSON = await result.json()
//                 setToken(responseJSON.token);
//                 localStorage.setItem('token', responseJSON.token);

//                 // setToken(result.data.token);
//                 // localStorage.setItem('token', result.data.token);
//             }


//         };
//         fetchData();
//     }

//     useEffect(() => {  //Se lanza cada vez que se cambia el estado 

//         console.log("estado", token);


//     });


//     return (
//         // <div>
//         //     <h1>Inicio</h1>
//         // </div>
//         <Fragment>
//             <h1>Iniciar Sesión</h1>
//             <p>Ingresa tu correo electrónico</p>
//             <input id='txtEmail'></input>
//             <p>Ingresa tu contraseña</p>
//             <input id='txtPassword'></input>
//             <button onClick={() => loginUser()} >Iniciar</button>
//         </Fragment>
//     )
// }

// export default LoginPage
