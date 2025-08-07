'use client'
import Link from 'next/link'
import React from 'react'
import { useContextProducto } from '../Providers/ProviderProducto'

export default function NavBarComponent() {

    const {carritoProducto}=useContextProducto()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/carrito"><span className='badge text-bg-warning'>{carritoProducto.length}</span> Carrito</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" href="/informacion">Informacion Pagina</Link>
                            </li>
                         
                         
                        </ul>
                       
                </div>
            </nav>
        </>
    )
}
