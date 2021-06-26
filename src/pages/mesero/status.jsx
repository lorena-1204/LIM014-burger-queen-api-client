import { useState , useEffect } from "react"
import { urlApi } from "../../services/URL"

export default function Status() {
    
const [products, setProducts] = useState()

const fetchApi = async (url) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(url),
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGMzNGEzMWI2NjZlZTE3OThkMzFlOGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNTU0NzU4LCJleHAiOjk5OTk5OTk5OTk5fQ.zGMhPbJxmlZUvznOr76NqBnI2DKx0l4612qdET0-66w'
          },
    }) 
    const responseJSON = await response.json()
    return responseJSON
 }

// useEffect, es un hook de react que permite encargarnos del ciclo de vida de react,se le va decir  no trnga dependecias al estar el array vacio y se ejecuta al iniciar la aplicacion por primera y unica vez
 useEffect(() =>{
 fetchApi(`${urlApi}/products`
 ).then(res =>{
    setProducts(res.products)
 })
 },[])

    return (
        <div>
            <ul>
                  {/*si no se lee productos se dice que se carga sino se muestra index=indice, para q no salga error se indica eñ key->es un valor unico por cada uno de los componentes que se renderiza */}
                  {!products ? 'Cargando ...': 
                    products.map((products,index) => {
                    return <li key={index}>{products.image} 
                    </li>
                })
                } 
            </ul>
            <h1>Status</h1> <br></br>
            <div>ahora sé porqué ✌ </div>
        </div>
    )
}