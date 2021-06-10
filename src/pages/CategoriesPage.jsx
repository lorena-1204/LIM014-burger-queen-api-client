import { useLocation, useHistory } from 'react-router-dom'

/*useHistory->permite navegar entre distintas rutas
Parametros querys -> se puede indicar un parametro, se usa generalmente  uno o dos parametors, uno indica posicion del elemento en la colección , dos cuantos elementos se quiere mostrar, generalmente son skip y limit
-> Parametros sirve para entrar mediante una url entar en ese estado */

export default function CategoriesPage() {
    const location = useLocation();
    const history = useHistory();

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


    const handleNext = () => {
        query.set("skip", skip + limit)
        // query.set("limit", 200)

        history.push({ search: query.toString() })
    }

    return (
        <div>
            <h1>CategoriesPage</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit: {limit}</h2>

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    )
}