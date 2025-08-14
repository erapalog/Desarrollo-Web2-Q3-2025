'use client'
import ListaProducto from '@/app/Componentes/ListaProducto';
import { useContextProducto } from '@/app/Providers/ProviderProducto'
import React, { useEffect } from 'react'

export default function page() {
  const {  setProducto } = useContextProducto();

  async function cargarProductos() {

    try {
      const resp = await fetch('http://localhost:5000/producto');
      const data = await resp.json();

      setProducto(data);

    } catch (error) {
      alert('Ocurrio un error al consumir el servicio producto' + error)
    }

  }

  useEffect(() => {
      cargarProductos();
  }, []);

  return (
    <div className='container'>

      <ListaProducto></ListaProducto>

    </div>
  )
}
