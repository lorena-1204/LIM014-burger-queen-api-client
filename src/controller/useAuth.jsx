import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

/*permite acceder al contexto
par consumir el contexto se llama al useContext y se pasa el contexto que se quiere consumir en nuestro caso es AUthContextot
- AuthProvider--> dotar a la aplicación como tal de un proveer, lo que se consume es el contexto
- useContext --> es un hook, cuando lo utilizamos devuelve los valores que se trae del contexto( en nuestro caso el contextValue, el objet q trae el user, el login y logout )   */

// export default function useAuth() {
//     return useContext(AuthContext);
// }

export default function useAuth() {
    const contextValue = useContext(AuthContext);
    return contextValue;
}