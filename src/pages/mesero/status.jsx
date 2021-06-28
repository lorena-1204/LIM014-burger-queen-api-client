export default function Status() {
    return (
        <div className="page-status">
            {/* columna izquierda */}
            <div className="left-box-readyOrders"> 
                <div className="left-box-readyOrders__title">
                     <h2>Ordenes listas para Recoger</h2>
                    <div className="left-box-readyOrders__order">
                        orden numero xxxx
                    </div>

                    <button className="button-default">Entregar</button>
                </div>
            </div>

             {/* columna derecha*/}
             <div className="right-box-inProcess"> 
                <div className="right-box-inProcess__title">
                    <h2>Ordenes en Proceso</h2>
                    <div className="right-box-inProcess__order">
                        <p>#     Products    Precio </p>
                    </div>

                    
                </div>
            </div>
           
            
            
        </div>
    )
}