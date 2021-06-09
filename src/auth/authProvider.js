import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // const [user, setUser] = useState({id:1});-> si tuviera valor se podría ingresar a la ruta privada 

    const contexValue = {
        user,
        // si estuviera la API primero se tendria que hacer la consulta, verificar la autentificación
        login(){
            setUser({ id: 1 , username:"lau"});
        },
        logout() {
            setUser(null);
        },
        isLogged(){
            return !! user;
        },
    };

    return (
      <AuthContext.Provider value={contexValue}>
        {children}
    </AuthContext.Provider>
    );
};
export default AuthProvider;
