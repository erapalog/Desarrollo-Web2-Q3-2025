import React from 'react'
import { useContador } from '../Provider/ProviderContador'

export default function Consumidor2() {

  const {sumarContador}=useContador()

  return (
    <div> <br /><br />
        <button onClick={sumarContador}> SUmar contador desde componente 2</button>
    </div>
  )
}
