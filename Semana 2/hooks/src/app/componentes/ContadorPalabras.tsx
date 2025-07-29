import React, { useEffect, useState } from 'react'

export default function ContadorPalabras() {

  const [text, setTexto]=useState<string>('') 
  const [contadorLetras, setContadorLetras]=useState<number>(0)  
  const [color, setColor]=useState<string>('yellow')

  useEffect(()=>{
    let cantidadLetras= text.length;

    if(cantidadLetras>10 && cantidadLetras<50){
        setColor('green')
    }
    else if (cantidadLetras>50){
         setColor('red')
    }
       
    
 
     setContadorLetras(cantidadLetras)

  },[text]);

  function asignarTexto(e:any){

    let textoIngresar=e.target.value;

   // if(textoIngresar.length>10) return
    
    setTexto(e.target.value)

  }

  return (
    <div>

        <textarea name="" id="" rows={10} cols={10} 
        placeholder='Ingrese texto'
        value={text}
        onChange={asignarTexto}

        style={{color}}
        >

        </textarea> <br />

        Catidad de letras en el text area{ contadorLetras}
    </div>
  )
}
