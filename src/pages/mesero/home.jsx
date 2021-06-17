import { useState , useEffect } from "react"

export default function Home() {
  
    const dataProducts = 'http://localhost:5000/products'
    // obtener los datos de la respuesta y alcenarlo en el estado de la aplicacion setProducts modifca la variable se usa ell hook de react useState cuando se obtengan los resultados se va guardar en la variable products utilizando setProducts
  // eslint-disable-next-line
    const [products, setProducts] = useState()

    // definir funcion se usa Async porque incluye cosas asincronas
    const fetchApi = async () => {
        //Respuesta de la funcion fetch a la url(dataProducts) y es un await  porque se debe esperar
        const response = await fetch(dataProducts)
        console.log(response)

        //se procesa la respuesta, interpretandola como json
        const responseJSON = await response.json()
        setProducts(responseJSON.products)
        // console.log(responseJSON)
        }

    // useEffect, es un hook de react que permite encargarnos del ciclo de vida de react,se le va decir  no trnga dependecias al estar el array vacio y se ejecuta al iniciar la aplicacion por primera y unica vez
     useEffect(() =>{
     fetchApi()
     },[])


    return (
        <div className="page-home">
            {/* columna izquierda */}
            <div className="left-column"> 
                <div className="client-name__input-area">
                    <div className="login-form__form__input-group">
                    <input className="input-default"  type="name" placeholder='Nombre del cliente'></input>
                    <input className="input-default"  type="number" placeholder='Numero de mesa'></input>
                    </div>

                    <button className="button-default">Guardar</button>
                </div>
                    <div className="button-group">
                         <button className="button-group__food">Desayuno</button>
                         <button className="button-group__food">Almuerzo y Cena</button>
                    </div>

                        <div>
                        {!products ? 'Cargando ...': 
                        products.map((products,index) => {
                        return <li key={index}>{products.price} 
                        </li>
                         })
                            } 

                        </div>
            </div>

             {/* columna derecha*/}
             <div className="right-column"> 
                <div className="client-name__input-area">
                    <div className="login-form__form__input-group">
                    <input className="input-default"  type="name" placeholder='Nombre del cliente'></input>
                    <input className="input-default"  type="number" placeholder='Numero de mesa'></input>
                    </div>

                    <button className="button-default">Guardar</button>
                </div>
            </div>
           
            
            
        </div>
    )
}