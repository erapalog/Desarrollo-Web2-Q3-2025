import React from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextProducto } from '../Providers/ProviderProducto'

export default function CardComponent(item: Producto) {
    const { agregarCarrito } = useContextProducto()

    return (

        <div className='col-md-4' key={item.idProducto}>
            <div className='card'>
                <div className='card-hader'>
                    {item.nombreProducto}
                </div>
                <div className='card-body'>

                    <p>Precio Producuto: {item.precioProducto}</p>
                    <p>ISV Producto {item.isvProducto}</p>

                    <img src={item.imgProducto} alt="" height={100} width={100} />

                    <button className='btn btn-sm btn-info' onClick={() => agregarCarrito(item)}>Agregar al carrito</button>
                </div>
            </div><br />
        </div>
    )
}
