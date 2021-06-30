import { useState, useEffect } from "react"

import { getProducts } from "../../services/products";
import { urlApi } from "../../services/url";

export default function Home() {
    // obtener los datos de la respuesta y alcenarlo en el estado de la aplicacion setProducts modifca la variable se usa el hook de react useState cuando se obtengan los resultados se va guardar en la variable products utilizando setProducts

    const [products, setProducts] = useState()

    // useEffect, es un hook de react que permite encargarnos del ciclo de vida de react,se le va decir  no trnga dependecias al estar el array vacio y se ejecuta al iniciar la aplicacion por primera y unica vez
    useEffect(() => {
        getProducts(`${urlApi}/products`
        ).then(res => {
            setProducts(res.products)
        })
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <ul>
                {/*si no se lee productos se dice que se carga sino se muestra index=indice, para q no salga error se indica eñ key->es un valor unico por cada uno de los componentes que se renderiza */}
                {!products ? 'Cargando ...' :
                    products.map((products, index) => {
                        return <li key={index}>{products.name}
                        </li>
                    })
                }
            </ul>

            <h2>🌊ola o hola 👋≧◉ᴥ◉≦ </h2>
        </div>
    )
}
