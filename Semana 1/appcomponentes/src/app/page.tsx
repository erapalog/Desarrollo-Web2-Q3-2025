import Image from "next/image";
import Pagina2 from "./Pagina2";
import { Persona } from "./Modelos/Persona";
import InformacionPersona from "./Componentes/InformacionPersona";
import InformacionNutricial from "./Componentes/InformacionNutricial";

export default function Home() {

  let alumnoPersona:Persona={
    nombre:'Juan',
    apellido:'Perez'
  };


   let alumno2Persona:Persona={
    nombre:'Juan',
    apellido:'Perez',
    edad:12
  };

  
  let edadPersona: number=25;

  let devolveredad= ():number =>{
      return 8;
  }


  function develverFechaNacimiento(){
    return '2002-09-09'
  }

  function devolverAlturaPersona():number{
      return 1.70
  }

  function devolverPesoPersona(pesoLibras:number):number{
      return pesoLibras/2.2
  }

  //interpolacion {}
  //Props: argumentos que yo puedo a otro componete
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
         
      <h1>Pagina de Inicio</h1> <br />

      
      <InformacionPersona nombre={alumnoPersona.nombre} apellido={alumnoPersona.apellido} edad={alumnoPersona.edad}></InformacionPersona>
      <InformacionPersona nombre={alumno2Persona.nombre} apellido={alumno2Persona.apellido} edad={alumno2Persona.edad}></InformacionPersona>
      <InformacionPersona nombre={alumnoPersona.nombre} apellido={alumnoPersona.apellido} edad={alumnoPersona.edad}></InformacionPersona>
      <InformacionPersona nombre={alumno2Persona.nombre} apellido={alumno2Persona.apellido} edad={alumno2Persona.edad}></InformacionPersona>


      <InformacionNutricial FechaNacimineto={develverFechaNacimiento()} peso={devolverPesoPersona(100)} altura={devolverAlturaPersona()}>

      </InformacionNutricial>
      <Pagina2></Pagina2>
      </main>
    
    </div>
  );
}
