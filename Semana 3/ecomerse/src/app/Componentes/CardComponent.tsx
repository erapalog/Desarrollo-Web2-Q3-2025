import React from 'react'
import { Producto } from '../Modelos/Producto'

export default function CardComponent(item: Producto) {

    return (

        <div>
            <div className='card' key={item.idProducto}>
                <div className='card-hader'>
                    {item.nombreProducto}
                </div>
                <div className='card-body'>

                    <p>Precio Producuto: {item.precioProducto}</p>
                    <p>ISV Producto {item.isvProducto}</p>

                    <img src={item.imgProducto} alt="" height={100} width={100} />

                    {/*<button className='btn btn-sm btn-info' onClick={() => agregarCarrito(item)}>Agregar al carrito</button>*/}
                </div>
            </div><br />
        </div>
    )
}
