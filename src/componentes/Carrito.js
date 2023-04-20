function Carrito(props) {

    return (
        <div>
            <h3>Lista del carrito</h3>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Descripción</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                        <th scope="col">--</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.map((p) => (
                        <tr>
                            <th scope="row">{p.nombre}</th>
                            <td>{p.cantidad}</td>
                            <td>{p.precio}</td>
                            <td>{p.cantidad*p.precio}€</td>
                            <td>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default Carrito;