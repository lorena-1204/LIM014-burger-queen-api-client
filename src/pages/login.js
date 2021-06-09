import React from 'react'
import useAuth from '../auth/useAuth';

const Login = () => {
    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
    }
    return (
        <div>
            <h1>Logind</h1>
            <button onClick={handleLogin}>
                SigIn
            </button>
        </div>
    )
}

export default Login
