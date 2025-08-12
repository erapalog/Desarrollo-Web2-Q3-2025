'use client'
import React from 'react'
import { useContextProducto } from '../Providers/ProviderProducto'
import CardComponent from './CardComponent'

export default function ListaProducto() {

    const { producto, agregarCarrito } = useContextProducto()
    return (
        <div className='row'>

            {
                producto.map((item) => (
                    <CardComponent {...item} key={item.idProducto}></CardComponent>
                ))
            }

        </div>
    )
}
