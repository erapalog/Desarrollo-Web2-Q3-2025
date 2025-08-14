import React from 'react'
import { useContextProducto } from '../Providers/ProviderProducto'
import { Producto } from '../Modelos/Producto'

export default function BotonAgrear(item: Producto) {

  const {agregarCarrito} =useContextProducto()
  return (
    <>
   
    <button type='button' className='btn btn-primary' onClick={()=>agregarCarrito(item)}>Agregar al Carrito</button> <br />
     </>
  )
}
