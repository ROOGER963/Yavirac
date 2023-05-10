"use strict";
//barco
class Barco {
    constructor() {
        this.numeroAnclas = 4;
        this.modelo = "Yamaha";
        this.fabricante = "Yamaha Corporation";
        this.Helices = 2;
        this.nombre = "JP YAMATO";
    }
    navegar() {
        console.log("El barco esta siendo navegado");
    }
    encender() {
        console.log("El barco esta siendo encendido");
    }
    detener() {
        console.log("El barco esta siendo detenido");
    }
    acelerar() {
        console.log("El barco esta siendo acelerado");
    }
    anclar() {
        console.log("El barco esta siendo anclado");
    }
}
let barco = new Barco();
console.log("Hola, gracias por confiar la construccion de su barco a nuestro astillero, el barco modelo " + barco.modelo +
    " de la compañia " + barco.fabricante + " que consta de " + barco.Helices + " helices y " + barco.numeroAnclas + " anclas culminara su construccion en 2 meses y se le asignara el nombre de " +
    barco.nombre + " segun especifico el cliente");
//yate
class Yate {
    constructor() {
        this.numeroAnclas = 1;
        this.modelo = "jet";
        this.fabricante = "yatesheep";
    }
    encender() {
        console.log("El yate esta siendo encendido");
    }
    detener() {
        console.log("El yate esta siendo detenido");
    }
    acelerar() {
        console.log("El yate esta siendo acelerado");
    }
    navegar() {
        console.log("el yate esta navegando");
    }
    anclar() {
        console.log("el yate esta anclado");
    }
}
let yate = new Yate();
console.log("Hola, gracias por confiar la construccion de su barco a nuestro astillero, el barco modelo " + barco.modelo +
    " de la compañia " + yate.fabricante + " helices y " + yate.numeroAnclas + " anclas culminara su construccion en 2 meses y se le asignara el nombre de " + " segun especifico el cliente");
//camioneta
class Camioneta {
    constructor() {
        this.modelo = "4x2";
        this.fabricante = "Casabaca";
        this.numeroLlantas = 4;
    }
    conducir() {
        console.log("El vehiculo esta siendo conducido");
    }
    encender() {
        console.log("El vehiculo esta siendo encendido");
    }
    detener() {
        console.log("El vehiculo esta siendo detenido");
    }
    acelerar() {
        console.log("El vehiculo esta siendo acelerado");
    }
}
let camioneta = new Camioneta();
console.log("Hola, gracias por confiar la construccion de su camioneta a nuestro astillero, el camioneta modelo " + camioneta.modelo +
    " de la compañia " + camioneta.fabricante);
//Camion
class Camion {
    constructor() {
        this.modelo = "4x2";
        this.fabricante = "Casabaca";
        this.numeroLlantas = 4;
        this.peso = "56kg";
    }
    conducir() {
        console.log("El camion esta siendo conducido");
    }
    encender() {
        console.log("El camion esta siendo encendido");
    }
    detener() {
        console.log("El camion esta siendo detenido");
    }
    acelerar() {
        console.log("El camion esta siendo acelerado");
    }
    movergruavalde() {
        console.log("el camion se encuentra trabajando con la grua del valde");
    }
}
let camion = new Camion();
console.log("Hola, gracias por confiar la construccion de su camion a nuestro astillero, el camion modelo " + camion.modelo +
    " de la compañia " + camion.fabricante);
//automovil
class Automovil {
    constructor() {
        this.modelo = "4x2";
        this.fabricante = "Casabaca";
        this.numeroLlantas = 4;
    }
    conducir() {
        console.log("El automovil esta siendo conducido");
    }
    encender() {
        console.log("El automovil esta siendo encendido");
    }
    detener() {
        console.log("El automovil esta siendo detenido");
    }
    acelerar() {
        console.log("El automovil esta siendo acelerado");
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.detener();
}
let automovil = new Automovil();
console.log("Hola, gracias por confiar la construccion de su automovil a nuestro astillero, el automovil modelo " + automovil.modelo +
    " de la compañia " + automovil.fabricante);
//Avion
class Avion {
    constructor() {
        this.longitud = "31,2 m";
        this.numeroTurbinas = 2;
        this.modelo = "Comercial";
        this.fabricante = "Aerolan";
    }
    encender() {
        console.log("El avion se esta prendiendo");
    }
    detener() {
        console.log("El avion se esta deteniendo");
    }
    acelerar() {
        console.log("El avion se esta acelerando");
    }
    volar() {
        console.log("El avion se esta en vuelo");
    }
    despegar() {
        console.log("El avion se esta despegando del suelo");
    }
    aterrizar() {
        console.log("El avion esta aterrizando");
    }
}
//Avioneta
class Avioneta {
    constructor() {
        this.longitud = "31,2 m";
        this.numeroTurbinas = 2;
        this.modelo = "Comercial";
        this.fabricante = "Aerolan";
    }
    encender() {
        console.log("La Avioneta se esta prendiendo");
    }
    detener() {
        console.log("La Avioneta se esta deteniendo");
    }
    acelerar() {
        console.log("La Avioneta se esta acelerando");
    }
    volar() {
        console.log("La Avioneta se esta en vuelo");
    }
    despegar() {
        console.log("La Avioneta se esta despegando del suelo");
    }
    aterrizar() {
        console.log("La Avioneta esta aterrizando");
    }
}
