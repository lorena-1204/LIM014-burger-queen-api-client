export default function Trabajadores() {
    return (
        <div>
            <section>
                <h2>Añadir un nuevo producto</h2>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="">Usuario</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="**********" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Categoria</label>
                            <select name="" id="">
                                <option value="">Administrador</option>
                                <option value="">Mesero</option>
                                <option value="">Cocina</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>Añadir</button>
                        </div>
                    </div>
                </form>
            </section>

            {/* <section>
                <h2>PRODUCTOS LIST</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Img</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((prod) => (
                            <tr key={prod._id}>
                                <td>{prod.name}</td>
                                <td>{prod.type}</td>
                                <td>$ {prod.price}</td>
                                <td>
                                    <img src={prod.image} width="80" height="80" alt="" />
                                </td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section> */}
        </div>
    );
}