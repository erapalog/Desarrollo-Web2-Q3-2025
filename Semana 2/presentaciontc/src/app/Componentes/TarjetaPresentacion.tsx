import React from 'react'
import { ListaTarjeta } from '../Modelos/ListaTarjeta'
import '../Estilos/MyStilos.css'

export default function TarjetaPresentacion(props:ListaTarjeta) {



  return (
     <div>

        {
            props.tarjetas.map((tarjeta,index)=>(
                <div key={index} className='clase-tarjeta' >
                    <h2>{tarjeta.nombre}</h2>
                    <p>{tarjeta.ocupacion}</p>
                    <p>{tarjeta.pais}</p>

                </div>
            ))
        }
    </div>
  )
}
