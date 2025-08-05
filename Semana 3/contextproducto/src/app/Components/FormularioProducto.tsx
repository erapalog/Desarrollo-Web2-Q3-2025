'use client'
import React, { useEffect, useState } from 'react'
import { useContextProducto } from '../Provider/ProductoProvider';
import { Producto } from '../Modelos/Producto';

export default function FormularioProducto() {

  const [nombreProducto,setNombreProducto]=useState<string>('')
  const [precioProducto, setPrecioProducto]=useState<number>(0);

  const {agregarProducto, producto}= useContextProducto();


  function agregarProductoFormulario(e:React.FormEvent){

    e.preventDefault();

    if(nombreProducto=='' || precioProducto==0) return


     let producto: Producto ={
            idProducto: Date.now(),
            nombreProducto:nombreProducto,
            precioProducto:precioProducto
    }

    agregarProducto(producto);
    alert('Producto agregado')

  }

  useEffect(()=>{
    alert('Cantidad de elementos en la lista' + producto.length)

  },[producto])

  return (
    <div>
        <h2>Formulario Para Agregar Producto</h2>

        <form onSubmit={agregarProductoFormulario}>

            <input type="text" placeholder='Nombre Producto'
                value={nombreProducto}
                onChange={(e)=>setNombreProducto(e.target.value)}
            />

            <input type='number' placeholder='Agregar Precio Producto'
                value={precioProducto}
                onChange={(e)=>setPrecioProducto(parseFloat(e.target.value))}
            ></input>

            <button type='submit'>Agregar Producto</button>
        </form>
    </div>
  )
}
