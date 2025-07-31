'use client'
import { useEffect, useState } from "react";
import { Tarjeta } from "./Modelos/Tarjetas";
import TarjetaPresentacion from "./Componentes/TarjetaPresentacion";

export default function Home() {

  const [tarjeta, setTarjetas] = useState<Array<Tarjeta>>([]);

  useEffect(() => {
    setTarjetas([{
      nombre: "Ana",
      ocupacion: "Desarrollador",
      pais: 'HN'
    },
    {
      nombre: "Pedro",
      ocupacion: "Desarrollador",
      pais: 'CR'
    },
    {
      nombre: "Juan",
      ocupacion: "Desarrollador",
      pais: 'ES'
    },
    {
      nombre: "Daniel",
      ocupacion: "PM",
      pais: 'GT'
    },
    {
      nombre: "Doris",
      ocupacion: "Scrum",
      pais: 'COL'
    }])
  }, []);


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1>Tarjeras de presentacion</h1>
        <TarjetaPresentacion tarjetas={tarjeta}></TarjetaPresentacion>

      </main>

    </div>
  );
}
