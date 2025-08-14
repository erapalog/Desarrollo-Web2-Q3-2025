import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const contexProducto=createContext({
    producto: [] as Producto[],
    carritoProducto:[] as Producto[],
    setProducto:(producto:Producto[])=>{},
    agregarCarrito:(item:Producto)=>{},
    guardarProducto:(item:Producto) =>{}
})