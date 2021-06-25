import { 
    // useState, 
    useEffect, 
    useContext } from "react"
import { urlApi } from "./URL"

export default function GetProducts() {

    // const [products, setProducts] = useState()
    const [products, setProducts] = useContext()
    // definir funcion se usa Async porque incluye cosas asincronas
    const fetchApi = async (url) => {
        //Respuesta de la funcion fetch a la url(dataProducts) y es un await  porque se debe esperar y retorna una promesa
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGMzNGEzMWI2NjZlZTE3OThkMzFlOGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNTU0NzU4LCJleHAiOjk5OTk5OTk5OTk5fQ.zGMhPbJxmlZUvznOr76NqBnI2DKx0l4612qdET0-66w'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }) /*Se alamacena la respuesta de la url */
        // console.log(response.status)

        //se procesa la respuesta(parsea), interpretandola como json
        const responseJSON = await response.json()
        return responseJSON
        // console.log(responseJSON.products)
    }

    // useEffect, es un hook de react que permite encargarnos del ciclo de vida de react,se le va decir  no trnga dependecias al estar el array vacio y se ejecuta al iniciar la aplicacion por primera y unica vez
    useEffect(() => {
        fetchApi(`${urlApi}/products`
        ).then(res => {
            setProducts(res.products)
        })
    }, [setProducts])

    return (
        products
    )
}

