"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    presentarPersona() {
        console.log("Mi nombre es " + this.nombre + " y mi identificacion es " + this.identificacion);
    }
}
exports.Persona = Persona;
