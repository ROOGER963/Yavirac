export class Persona {
    nombre: string;
    identificacion: number;

    constructor(nombre: string, identificacion: number){
        this.nombre = nombre;
        this.identificacion = identificacion;
    }

    presentarPersona(){
        console.log("Mi nombre es " + this.nombre + " y mi identificacion es " + this.identificacion)
    }
}