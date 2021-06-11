import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
/*permite acceder al contexto*/

export default function useAuth() {
    return useContext(AuthContext);
}