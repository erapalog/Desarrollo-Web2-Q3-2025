'use client'
import React, { useContext, useState } from 'react'
import {  PlantillaNode } from '../Modelos/PlantilaNode'
import { Producto } from '../Modelos/Producto'
import {contexProducto} from '../Context/ContextoProducto'

//children
//implementacion
//exportar

export default function ProviderProducto({children}:PlantillaNode) {

  const [producto,setProducto]=useState<Producto[]>([]);
  const [carritoProducto,setCarritoProducto]=useState<Producto[]>([]);

  function agregarCarrito(item:Producto){

    setCarritoProducto([...carritoProducto,item])
  }

  return (
    <contexProducto.Provider value={{producto,setProducto,carritoProducto,agregarCarrito}}>
        {children}
    </contexProducto.Provider>
  )
}

export function useContextProducto(){
    return useContext(contexProducto)
}
