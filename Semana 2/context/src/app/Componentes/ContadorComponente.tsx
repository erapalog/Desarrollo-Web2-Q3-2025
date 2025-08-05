import React, { useState } from 'react'

export default function ContadorComponente() {
    
  const [contador, setContador]=useState(0)

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){
    setContador(contador-1)
  }
  return (
    <div>
        
      El valor del contador {contador} <br />

      <button onClick={sumarContador}>Sumar al contador</button> <br />
      <button onClick={restarContador}>Restar al contador</button> <br />
    </div>
  )
}
