import { useState , useEffect } from "react"

import { getProducts } from "../../services/products";
import { urlApi } from "../../Url/url";

export default function Home() {
    // obtener los datos de la respuesta y alcenarlo en el estado de la aplicacion setProducts modifca la variable se usa el hook de react useState cuando se obtengan los resultados se va guardar en la variable products utilizando setProducts

    const [products, setProducts] = useState()

    // useEffect, es un hook de react que permite encargarnos del ciclo de vida de react,se le va decir  no trnga dependecias al estar el array vacio y se ejecuta al iniciar la aplicacion por primera y unica vez
    
    useEffect(() => {
        getProducts(`${urlApi}/products`
        ).then(res => {
            setProducts(res)
            // setProducts(res.products)
            console.log("a",res);
            // console.log("b", res.products);
        })
    }, [])
     
    return (
        <div className="page-home">
            {/* columna izquierda */}
            <div className="left-column"> 
                <div className="client-name__input-area">
                    <div className="login-form__form__input-group">
                    <input className="input-default"  type="name" placeholder='Nombre del cliente'></input>
                    <input className="input-default"  type="number" placeholder='Numero de mesa'></input>
                    </div>
                        <div><button className="button-default">Guardar</button></div>
                    
                </div>
                    <div className="select-area">
                        
                         <select className="select-area__select" id="select-category">
                            <option value="none">--</option>
                            <option> </option>
                            <option> </option>
                        </select> 
                    </div>

                        <div className='page-home__products'>
                        {!products ? 'Cargando ...': 
                        products.map((products,index) => {
                        return <div  className='page-home__products__container' key={index}>{products.name}<ul>S/.{products.price}</ul><img className='page-home__products__img' src={products.image} alt="" />
                        </div>
                        
                         })
                            } 

                        </div>
            </div>

             {/* columna derecha*/}
             <div className="right-column__box-area"> 
                <div className="right-column__box-area__text-area">
                    <p>Cliente: </p>
                    <p>Colaborador:</p>
                    <p># orders:</p>
                    <p>Mesa:</p>
                    <div className="right-column__box-area__header">
                        <p>#     Products    Precio </p>
                    </div>
                    <div>Borrar ezxtso</div>

                    
                </div>
            </div>
           
            
            
        </div>
    )
}