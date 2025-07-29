import React, { useEffect, useState } from 'react'

export default function ContadorPalabras() {

  const [text, setTexto]=useState<string>('') 
  const [contadorLetras, setContadorLetras]=useState<number>(0)  

  useEffect(()=>{
    let cantidadLetras= text.length;
 

    if(cantidadLetras==10)
      return

    setContadorLetras(cantidadLetras)

  },[text])

  function asignarTexto(e:any){
    setTexto(e.target.value)
  }

  return (
    <div>

        <textarea name="" id="" rows={10} cols={10} 
        placeholder='Ingrese texto'
        value={text}
        onChange={asignarTexto}
        >

        </textarea> <br />

        Catidad de letras en el text area{ contadorLetras}
    </div>
  )
}
