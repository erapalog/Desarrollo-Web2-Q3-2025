'use client'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextProducto } from '../Context/ContextProducto'
import { Producto } from '../Modelos/Producto'

//recibir un props ReactNode
//Implementaciones
//exportar context

interface Plantilla{
    children: ReactNode
}

export default function ProductoProvider({children}:Plantilla) {
   
    const [producto, setProducto]=useState<Producto[]>([]);

  
    function agregarProducto(item:Producto){
        setProducto([...producto,item])

    }

  return (
    
    <ContextProducto.Provider value={{producto,agregarProducto}}>
        {children}
    </ContextProducto.Provider>
  )
}

export function useContextProducto(){
    return useContext(ContextProducto)
}