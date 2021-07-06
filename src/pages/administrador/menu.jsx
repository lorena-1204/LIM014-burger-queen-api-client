export default function Menu() {
    return (
        <div>
            <section>
                <h2>Añadir un nuevo producto</h2>
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
                            <input type="text" placeholder="Item" />
                        </div>
                        <div>
                            <label htmlFor="">Imagen</label>
                            <input type="text" placeholder="ItemProductImg" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Precio</label>
                            <input type="number" />
                        </div>
                        <div>
                            <button>Añadir</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}