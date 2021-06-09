// se consume el contenido del contrxto 

import { useContext } from 'react';
import { AuthContext } from './authProvider';

const useAuth = () => {
    const contexValue = useContext(AuthContext);
//simplificado: return useContext(AuthContext);
    return contexValue;
}

export default useAuth
