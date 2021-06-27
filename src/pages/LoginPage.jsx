import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { postAuth } from '../services/auth';

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
                    <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p id="error" />
                    <button type="submit" value="Login">Login</button>
                    {/* <input class="sub" type="submit" value="Login" /> */}
                </form>
            </div>
        </div>
    )
}

export default LoginPage