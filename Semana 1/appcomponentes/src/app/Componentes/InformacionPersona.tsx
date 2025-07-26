import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function InformacionPersona(props:Persona) {
  return (
    <div>
        <h2>Informacion General Persona (Componente 1)</h2>
       
        <p>Nombre Persona: {props.nombre}</p>
        <p>Apellido Persona: {props.apellido}</p>
        <p>Edad Persona {props.edad}</p>
    </div>
  )
}
