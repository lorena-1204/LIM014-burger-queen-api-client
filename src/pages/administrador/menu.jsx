export default function Menu() {
    return (
        <div>
            <section className="page-admin">
                <h2 className="page-admin_text">Añadir un nuevo producto</h2>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="">Categoria</label>
                            <select name="" id="">
                                <option value="">Desayuno</option>
                                <option value="">Almuerzo</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Producto</label>
                            <input 
                            className="input-default"
                            type="text" 
                            placeholder="Item" />
                        </div>
                        <div>
                            <label htmlFor="">Imagen</label>
                            <input
                            className="input-default"
                            type="text" 
                            placeholder="ItemProductImg" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Precio</label>
                            <input
                            className="input-default"
                            type="number" />
                        </div>
                        <div>
                            <button
                                className="button-default">
                                    Añadir
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}