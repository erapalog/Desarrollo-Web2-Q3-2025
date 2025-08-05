'use client'
import React from 'react'
import { useContextProducto } from '../Provider/ProductoProvider'

export default function TablaProductos() {

    const {producto}= useContextProducto()

  return (
    <div>
        <h2>Lista de Productos</h2>

        <table border={1}>
            <thead>
                <th>id Producto</th>
                <th>Nombre Producto</th>
                <th>Precio Producto</th>
            </thead>
            <tbody>
                {
                    producto.map((producto)=>(
                        <tr key={producto.idProducto}>
                            <td>{producto.idProducto}</td>
                            <td>{producto.nombreProducto}</td>
                            <td>{producto.precioProducto}</td>

                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
