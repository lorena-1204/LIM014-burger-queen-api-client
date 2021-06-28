import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { postAuth } from '../services/auth/auth';


const LoginPage = () => {
    const history= useHistory();
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const login = async(event)=>{
        event.preventDefault();
        try{
            const { token } = await postAuth(email, password);
            localStorage.setItem('token', token);
             // guarda token en EL STORAGE
             history.push ();
        }catch(error){
            document.getElementById('error').textContent = error;
        }
    }
    return (
        <div className="login">
            <h1>
                Burger Queen
            </h1>
            <div id="login-form" className="body">
               
                <form onSubmit={(event) => login(event)}>
                    <input type="text" 
                    name="email" 
                    placeholder="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password"
                    name="password" 
                    placeholder="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* <p id="error" /> */}
                    <button type="submit" value="Login">Login</button>
                    {/* <input class="sub" type="submit" value="Login" /> */}
                </form>
            </div>
        </div>
    )
}

export default LoginPage


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



// import React, { useState } from 'react'
// import { useHistory, useLocation } from 'react-router-dom';
// import { postAuth } from '../services/auth/auth';
// import useAuth from '../services/auth/useAuth';


// const LoginPage = () => {
//     const history = useHistory();
//     /*nos permite navegar a otra página */
//     const location = useLocation(); /*permite obtener informacion de la url ,nos ayuda a almacenar el location en la ruta anterior */
//     console.log(location);
//     console.log(location.state?.from);
//     //?si el state es nulo va dar undefined
//     /*➡trae la información del url⬆ u */
//     const previusObjectURL = location.state?.from;

//     const auth = useAuth();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = async (event) => {
//         event.preventDefault();
//         try {
//             const { token } = await postAuth(email, password);
//             localStorage.setItem('token', token);
//             // guarda token en EL STORAGE
//             history.push();
//         } catch (error) {
//             document.getElementById('error').textContent = error;
//         }
//     }


//     const handleLogin = () => {
//         auth.login();
//         history.push(previusObjectURL || "/mesero")
//         /*⬆ se envia a la ruta anterior pero si es undefined entonces se envia a mesero- el estado de las rutas anteriores solo se esta guardando en las rutas privadas*/
//     }


//     return (
//         <section className="page-login">
//             <div id="login-form" className="login-form">
//                 <h1 className="login-form__title">
//                     Burger Queen
//                 </h1>


//                 <form onSubmit={(event) => login(event)} className="login-form__form" autoComplete="off">
//                     <div className="login-form__form__input-group">

//                         <input className="input-default" type="text" name="email" placeholder="Usuario" value={email} onChange={(e) => setEmail(e.target.value)} />

//                         <input className="input-default" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

//                     </div>


//                     <p id="error" />
//                     <button className="button-default" onClick={handleLogin}
//                     //  type="submit" value="Login"
//                     >Iniciar Sesión
//                     </button>

//                 </form>
//             </div>
//         </section>
//     )
// }

// export default LoginPage
