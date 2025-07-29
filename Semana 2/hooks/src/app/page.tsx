'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import ContadorPalabras from "./componentes/ContadorPalabras";

export default function Home() {

  //ejericio basico 1 valor de un estado, y puedo disminuirlo
  //cuando la pagina carga, cuando un objeto cambia de valor

  const [contador, setContador]= useState<number>(0);
  const [nombre, setNombre]= useState<string>('');
  const [apellido, setApellido]= useState<string | null>(null);
  const [listaGustos, setListaGustos]= useState<Array<string>>([]);

  let contadorVariable:number=0;

  function sumarContador(){

    setContador(contador+1)
    contadorVariable=contadorVariable+1;
    console.log(contadorVariable)
  }

  function restarContador(valor:number){
    setContador(contador-valor)
     contadorVariable=contadorVariable-1;
       console.log(contadorVariable)
  }


  useEffect(()=>{
      console.log('---componente ha sido cargado');
      contadorVariable=0;
  },[])

  useEffect(()=>{
      console.log('---componente ha sido cargado');
      //contadorVariable=0;
  },[contadorVariable])


  //console.log('Componente montado')

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      <h2>Trabajando con Use State</h2>

      Valor del estado contador: {contador} <br />
      Valor de la variable contador: {contadorVariable}

      <button onClick={sumarContador} type="button">Sumar contador</button>

      <button onClick={()=> restarContador(2)} type="button">Restar contador 2</button>

      <ContadorPalabras></ContadorPalabras>

      </main>
      
    </div>
  );
}
