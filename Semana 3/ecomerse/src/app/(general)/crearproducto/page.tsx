'use client'
import { Producto } from '@/app/Modelos/Producto';
import { useContextProducto } from '@/app/Providers/ProviderProducto'
import React, { useState } from 'react'

export default function page() {

    const {guardarProducto} =useContextProducto();

    const [nombreProducto, setNombreProducto]=useState<string>('')
    const [precioProducto, setPrecioProducto]=useState<string>('')
    const [isvProducto, setIsvProducto]=useState<string>('')
    const [imgProducto, setImgProducto]=useState<string>('');


    function guardarProductoCompra(){
        const producto:Producto={
            nombreProducto: nombreProducto,
            precioProducto:parseFloat(precioProducto),
            isvProducto:parseFloat(isvProducto),
            imgProducto:imgProducto
        }

        guardarProducto(producto);
    }

  return (
    <div className='container'>
        <h5>Agregar Producto</h5>
        
        <form action="" className='form-control'>
            <input type='text' placeholder='Nombre Producto' className='form-control'
            value={nombreProducto}
            onChange={(e)=>setNombreProducto(e.target.value)}
            
            ></input> <br />
            <input type="text" placeholder='Ingresar precio Producto'  className='form-control'
            value={precioProducto}
            onChange={(e)=> setPrecioProducto(e.target.value)}
            /> <br />
            <input type="text" placeholder='ISV Producto'  className='form-control' 
            value={isvProducto}
            onChange={(e)=>setIsvProducto(e.target.value)}
            /> <br />
            <input type="text" placeholder='URL img'  className='form-control'
            value={imgProducto}
            onChange={(e)=> setImgProducto(e.target.value)}
            /> <br />

            <button type='button' className='btn btn-info' onClick={guardarProductoCompra}>Guardar Producto</button>
        </form>

    </div>
  )
}
