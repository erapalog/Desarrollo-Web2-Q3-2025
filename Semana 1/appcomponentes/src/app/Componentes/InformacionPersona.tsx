import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function InformacionPersona(persona:Persona) {
  return (
    <div>
        <h2>Informacion General Persona (Componente 1)</h2>
       
        <p>Nombre Persona: {persona.nombre}</p>
        <p>Apellido Persona: {persona.apellido}</p>
        <p>Edad Persona {persona.edad}</p>
    </div>
  )
}
