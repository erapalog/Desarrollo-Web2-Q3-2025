'use client'
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
                        <CardComponent {...item} key={item.idProducto}></CardComponent>
                    ))
                }

            </div>

        </div>
    )
}
