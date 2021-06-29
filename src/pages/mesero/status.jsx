export default function Status() {
    return (
        <div className="page-status">
            {/* columna izquierda */}
            <div className="left-box-readyOrders"> 
                <div className="left-box-readyOrders__title">
                     <h2 className="box-title">Ordenes listas para Recoger</h2>
                    <div className="left-box-readyOrders__order">
                        orden numero xxxx
                        <button className="btn-order-delivered">Orden entregada</button>
                    </div>

                    
                </div>
            </div>

             {/* columna derecha*/}
             <div className="right-box-inProcess"> 
                <div className="right-box-inProcess__title">
                    <h2 className="box-title">Ordenes en Proceso</h2>
                    <div className="right-box-inProcess__order">
                        <p>#     Products    Precio </p>
                    </div>

                    
                </div>
            </div>
           
            
            
        </div>
    )
}