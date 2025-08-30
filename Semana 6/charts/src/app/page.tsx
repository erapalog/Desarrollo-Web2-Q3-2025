import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <h1>Integracion con graficas</h1>

     <Link href='/graficoBarra'>Ir al grafico de barra/ Salario x Depto</Link> <br />
     <Link href='/graficolineal'>Ir al grafico de Lineal/ Emplaeado x Depto</Link> 

     <Link href='/graficodona'>Ir al grafico de Dona/ Salario x Depto</Link> 
    </div>
  );
}
