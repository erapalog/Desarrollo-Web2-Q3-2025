import { createContext } from "react";

//plantilla de lo que quiero disponibilizar
export const ContextoContador= createContext({
    contador:0,
    sumarContador: ()=>{},
    restarContador: ()=>{}
})