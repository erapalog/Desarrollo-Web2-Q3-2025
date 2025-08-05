import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const ContextProducto= createContext({
    producto: [] as Producto[],
    agregarProducto: (item: Producto)=>{}
})