import React from 'react'
import { useContador } from '../Provider/ProviderContador'

export default function Consumidor() {

  const {contador,sumarContador,restarContador} = useContador();


  return (
    <div> <br />
        Estado Contador desde Consumidor {contador} <br />
        <button onClick={sumarContador}>Sumar Contador desde Consumidor</button> <br />
        <button onClick={restarContador}>Restar Contador desde Consumidor</button> <br />
    </div>
  )
}
