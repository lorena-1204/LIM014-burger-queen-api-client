import React from 'react'
import { useLocation, useHistory } from 'react-router'


/*useHistory->permite navegar entre distintas rutas 
Parametros querys -> se puede indicar un parametro, se usa generalmente  uno o dos parametors, uno indica posicion del elemento en la colección , dos cuantos elementos se quiere mostrar, generalmente son skip y limit 
-> Parametros sirve para entrar mediante una url entar en ese estado */

const Categories= () => {
    const location = useLocation ();
    const history = useHistory ();

    const query = new URLSearchParams(location.search) 
    const skip = parseInt(query.get("skip")) || 0
    const limit = parseInt(query.get("limit")) || 15

    /*los parametros skip y limit ->sirven para construir una consulta a la API que traiga los registro correspondientes a los ordenes de paginación
    ->se xtrae los valores del query string
    console.log(location); -> muestra los atributos que se tiene 
    console.log(location.search); -> através de search se accede a la query
    console.log(query); ->get accede a los valores de la query
    console.log(skip);
    console.log(limit);*/

    //crear función
    const handlNext =() => {
        // console.log("Next")
        query.set("skip",skip + limit)
        // query.set("skip", 100)
        // query.set("limit", 200)

        history.push({search:query.toString()})
        // history.push ({pathname:"/" , search:"?sabor=chocolate&color=zul"})
        // Quets Params => "? sabor = chocolate & color=zul"
    }

    return (
        <div>
            <h1>Categories</h1>
            <h2> imprimir en pantalla</h2>
            <h2> skip: {skip}</h2>
            <h2> limit: {limit}</h2>

            {/* cambiar parametros desde la misma palicación */}
            <button onClick={handlNext}> 
                Next
            </button>
        </div>
    )
}

export default Categories
