import { useState , useEffect } from "react"
import { urlApi } from "../../controller/URL"

export default function Home() {
    
    // obtener los datos de la respuesta y alcenarlo en el estado de la aplicacion setProducts modifca la variable se usa el hook de react useState cuando se obtengan los resultados se va guardar en la variable products utilizando setProducts
    
  const [products, setProducts] = useState()

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
     useEffect(() =>{
     fetchApi(`${urlApi}/products`
     ).then(res =>{
        setProducts(res.products)
     })
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
                    <div className="select-area">
                        
                         <select className="select-area__select" id="select-category">
                            <option value="none">--</option>
                            <option> </option>
                            <option> </option>
                        </select> 
                    </div>

                        <div>
                        {!products ? 'Cargando ...': 
                        products.map((products,index) => {
                        return <li key={index}>{products.name} 
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