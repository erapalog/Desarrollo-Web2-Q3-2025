import React, { ReactNode, useContext, useState } from 'react'
import { ContextoContador } from '../Contexto/ContexContador';

//recibir un props ReactNode /
//implementaciones
// exportar contexto


interface Vista {
    children: ReactNode
}

export default function ProviderContador(props: Vista) {

    const [contador, setContador] = useState(0);

    function sumarContador() {
        setContador(contador + 1)
    }

    function restarContador() {
        setContador(contador - 1)
    }

    

    return (
        <div>
            <ContextoContador.Provider value={{contador,sumarContador,restarContador}}>
                    {props.children}
            </ContextoContador.Provider>
        </div>
    )
}
export const useContador =() =>{
    return useContext(ContextoContador)
}
