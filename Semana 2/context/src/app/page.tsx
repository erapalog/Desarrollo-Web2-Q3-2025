
'use client'
import Image from "next/image";
import OperacionesComponent from "./Componentes/OperacionesComponent";
import { useState } from "react";
import ContadorComponente from "./Componentes/ContadorComponente";
import ProviderContador from "./Provider/ProviderContador";
import Consumidor from "./Componentes/Consumidor";
import Consumidor2 from "./Componentes/Consumidor2";

export default function Home() {



  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
      <h1>Uso de contextos</h1>
    
      <ContadorComponente></ContadorComponente>

      <ProviderContador>
          <Consumidor></Consumidor>
          <Consumidor2></Consumidor2>
      </ProviderContador>

      </main>
    
    </div>
  );
}
