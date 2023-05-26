import { Persona } from "./Persona";

export interface Vendedor extends Persona {
    producto: string,
    seccion: string,
    precio: number,
}