"use strict";
//crear una clase empleado el cual me pueda reflejar el sueldo fijo y las horas extras
class Empleado {
    constructor(name, timework, porhora) {
        this.name = name;
        this.porhora = porhora;
        this.timework = timework;
    }
    sueldo() {
        return this.porhora + this.timework;
    }
}
const empleado1 = new Empleado("Pepe", 500, 50);
console.log(`El sueldo de: ${empleado1.name} es de ${empleado1.sueldo()}`);
