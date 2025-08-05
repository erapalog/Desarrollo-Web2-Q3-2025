import React from 'react'
import { Operaciones } from '../Modelos/Operaciones'

export default function OperacionesComponent(propiedad:Operaciones) {

  function operaciones(a:number,b:number, operaciones:number){

    let resultado=0
    switch (operaciones) {
        case 1:
            resultado= a+b
            break;
        case 2:
            resultado= a-b
            break;

        case 3:
            resultado= a*b
            break;
    
        default:
            break;
    }

    return resultado;
  }
  return (
    <div>
        El resultado de la operacion es: {operaciones(propiedad.a,propiedad.b,propiedad.operacion)}
    </div>
  )
}
