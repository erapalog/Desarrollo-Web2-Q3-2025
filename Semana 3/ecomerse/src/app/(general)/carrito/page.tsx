'use client'
import { useContextProducto } from '@/app/Providers/ProviderProducto'
import React from 'react'

export default function page() {

    const { carritoProducto } = useContextProducto()

    return (
        <div className='container'>
            <div className='row'>

                {
                    carritoProducto.map((item) => (
                        <div className='col-md-4' key={item.idProducto}>
                            <div className='card'>
                                <div className='card-hader'>
                                    {item.nombreProducto}
                                </div>
                                <div className='card-body'>

                                    <p>Precio Producuto: {item.precioProducto}</p>
                                    <p>ISV Producto {item.isvProducto}</p>

                                    <img src={item.imgProducto} alt="" height={100} width={100} />

                                    <button className='btn btn-sm btn-danger' >Eliminar del carrito</button>
                                </div>
                            </div><br />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
