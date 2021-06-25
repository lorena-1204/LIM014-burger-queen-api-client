// import React, { Fragment, useState, useEffect } from 'react';
// import { urlApi } from "./url"
// function LoginPage() {
// const [token, setToken] = useState({});
// // HOOKS - setToken: Es el método creado con useState que sirve para cambiar el valor de la variable token, que se encuentra en el estado
//     //  const [admin, setAdmin] = useState(true);    
//     const loginUser = () => {
//         const fetchData = async () => {
//             const result = await fetch.post(
//                 `${urlApi}/auth`,
//                 {
//  email: document.getElementById('txtEmail').value,
//  password: document.getElementById('txtPassword').value,
//                 }
//             ).catch((error) => {
//                 alert("Error de acceso");
//             });

//             if (result !== undefined) {
//     // const responseJSON = await result.json()
//                 // setToken(responseJSON.token);
//     // localStorage.setItem('token', responseJSON.token);

//                 setToken(result.data.token);
//     localStorage.setItem('token', result.data.token);
//             }
//         };
//         fetchData();
//     }
//     useEffect(() => {  //Se lanza cada vez que se cambia el estado 
//         console.log("estado", token);
//     });

//     return (
//         <Fragment>
//            <p>Ingresa tu correo electrónico</p>
//             <input id='txtEmail'></input>
//             <p>Ingresa tu contraseña</p>
//             <input id='txtPassword'></input>
//     <button onClick={() => loginUser()} >Iniciar</button>
//         </Fragment>
//     );
// }
// export default LoginPage;

// /**************** ********* ************* **************/
// import { url } from './url';
// const getToken = async (email, password) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//     };
//     const data = await fetch(`${urlApi }/auth`, requestOptions);
//     const dataJson = await data.json();
//     switch (data.status) {
//         case 200:
//             return dataJson;
//         case 400:
//             throw new Error('Insert email and password');
//         case 404:
//             throw new Error('Invalid user or password');
//         default:
//             throw new Error(data.statusText);
//     }
// };
// export { getToken };

// /** LOGIN **/
// /* eslint-disable react/jsx-filename-extension */
// import React, { useState } from 'react';
// //import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import './Login.scss';
// import { getToken } from '../../controller/auth';
// import Vectorburger from '../../assests/Vectorburger.svg'

// const Login = () => {
//     let history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const loginSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const { token } = await getToken(email, password);
//             localStorage.setItem('token', token);
//             history.push('/home');
//         } catch (error) {
//             document.getElementById('error').textContent = error;
//         }
//     };
//     return (
//         <div className="login">
//             <h1>Burger Queen</h1>
//             <div id="login-form" className="body">
//                 {/* src/assests/Vectorburger.svg */}
//                 <img src={Vectorburger} alt="" />
//                 {/* enviamos informacion de todo el form */}

//                 <form onSubmit={(event) => loginSubmit(event)}> linea 50

//                     <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     <p id="error" />
//                     <button type="submit" value="Login">Login</button>
//                     {/* <input class="sub" type="submit" value="Login" /> */}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

// /**************** *********mio ************* **************/
// import { createContext, useState, useEffect } from "react";
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//     const dataAuth = 'http://localhost:5000/auth';
//     const [user, setUser] = useState(
//         JSON.parse(localStorage.getItem("user")) || null
//     );
//     const loginUser = () => {
//         const fetchApi = async () => {
//             const response = await fetch.post(dataAuth,
//                 {
//                     email: document.getElementById('textEmail').value,
//                     password: document.getElementById('textEmail').value,
//                 }).catch((error) => {
//                     alert("Error de acceso");
//                 });
//             if (response !== undefined) {
//                 const responseJSON = await response.json()
//                 // setProducts(responseJSON.products)
//                 setUser(responseJSON.user);
//                 localStorage.setItem('user', responseJSON.user);
//             }
//         };
//         fetchApi();
//     }
//     useEffect(() => {
//         try {
//             localStorage.setItem("user", JSON.stringify(user));
//         } catch (error) {
//             localStorage.removeItem("user");
//             console.log(error);
//         }
//     }, [user])
