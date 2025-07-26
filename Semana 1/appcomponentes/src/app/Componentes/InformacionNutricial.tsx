import React from 'react'
import { InformacionNutricional } from '../Modelos/InformacionNutricional'


//destructuracion
export default function InformacionNutricial({FechaNacimineto,peso,altura}:InformacionNutricional) {
  return (
    <div>
        <h2>Informacion Nutricional</h2>
        
      <p>Fecha Nacimiento persona : {FechaNacimineto}</p>
      <p>Estatura Persona {peso}</p>
      <p>Peso Persona {altura} KG</p>
    </div>
  )
}
