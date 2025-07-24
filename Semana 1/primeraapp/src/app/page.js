'use client'
import Image from "next/image";

export default function Home() {

  
  var animal='Perrito'


  alert(animal);

  animal=5

  alert(animal);

  animal=[1,2,3,4,]

  for(let x in animal)
      console.log(x)


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      
      <h1>Primera aplicacion en Next Js</h1>

     
      </main>
  
    </div>
  );
}
