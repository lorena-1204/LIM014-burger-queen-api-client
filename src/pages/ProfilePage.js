import React from 'react'
import{ useParams} from 'react-router-dom'
/*+se importa un hook y los hook solo se puede usar dentro de un componente o dentro de otro hook 
-> nos va a ayudar a identificar el nombre del usuario(recuperar el nombre de usario que se usa de la variable q imprimir en pantalla) ej de hook parms lee el parametro para traer la data del ApI*/

const ProfilePage = () => {
    // const params = useParams ();-> Params es un hook, trae distintos parametros de la urls, si el route tuviera 2 de un parametro tendria 2 claves (username y otro paremeto)
    const { username } = useParams ();
    /* devuelve los distintos parametros de la url, se carga el componente, imprime el parametro y se muestra en pantalla es decir lee el parametro para realizar la llamada al API y traiga la información para verse en pantalla*/
    return (
        <div>
            <h1>ProfilePage: {username}</h1>
        </div>
    )
}

export default ProfilePage
