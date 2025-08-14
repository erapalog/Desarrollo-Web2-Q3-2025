'use client'
import BotonEliminar from '@/app/Componentes/BotonEliminar'
import CardComponent from '@/app/Componentes/CardComponent'
import { useContextProducto } from '@/app/Providers/ProviderProducto'
import React from 'react'

export default function page() {

    const { carritoProducto } = useContextProducto()

    return (
        <div className='container'>
            <div className='row'>

                {
                    carritoProducto.map((item) => (
                        <div className='col-md-4'>
                                <CardComponent {...item} key={item.idProducto}></CardComponent>
                                <BotonEliminar></BotonEliminar>
                        </div>
                        
                    ))
                }

            </div>

        </div>
    )
}
