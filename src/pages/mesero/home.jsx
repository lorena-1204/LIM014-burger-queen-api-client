export default function Home() {
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