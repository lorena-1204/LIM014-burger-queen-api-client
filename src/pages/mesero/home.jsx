import { useState , useEffect } from "react"

export default function Home() {
  
    const dataProducts = 'http://localhost:5000/products'
    // obtener los datos de la respuesta y alcenarlo en el estado de la aplicacion setProducts modifca la variable se usa ell hook de react useState cuando se obtengan los resultados se va guardar en la variable products utilizando setProducts
  const [products, setProducts] = useState()

    // definir funcion se usa Async porque incluye cosas asincronas
    const fetchApi = async () => {
        //Respuesta de la funcion fetch a la url(dataProducts) y es un await  porque se debe esperar
        const response = await fetch(dataProducts)
        console.log(response)

        //se procesa la respuesta, interpretandola como json
        const responseJSON = await response.json()
        setProducts(responseJSON)
        console.log(responseJSON)
     }

    // useEffect, es un hook de react que permite encargarnos del ciclo de vida de react,se le va decir  no trnga dependecias al estar el array vacio y se ejecuta al iniciar la aplicacion por primera y unica vez
     useEffect(() =>{
     fetchApi()
     },[])


    return (
        <div>
            <h1>Home</h1> 
             <ul>
                {/* {!products ? 'Cargando ...': 
                    products.map((products,index) => {
                    return <li>{products.name} 
                    </li>
                })
                } */}
            </ul> 

            <h2>🌊ola o hola 👋≧◉ᴥ◉≦ </h2>
        </div>
    )
}