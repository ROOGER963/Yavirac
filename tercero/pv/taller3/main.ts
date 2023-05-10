interface IVehiculo {
  readonly modelo : string;
  readonly fabricante: string;
  encender(): void;
  detener(): void;
  acelerar(): void;
}
//definicion tipo vehiculo
interface IVehiculoTerrestre extends IVehiculo {
  numeroLlantas: number;
  conducir(): void;
}

interface IvehiculoMaritimo extends IVehiculo {
  numeroAnclas: number;
  navegar(): void;
  anclar(): void;
}

interface IvehiculoAereo extends IVehiculo {
  numeroTurbinas: number;
  volar(): void;
  despegar(): void;
  aterrizar():void;
}
//barco
class Barco implements IvehiculoMaritimo {
  numeroAnclas: number = 4;
  modelo: string = "Yamaha";
  fabricante: string = "Yamaha Corporation";
  Helices: number = 2;
  nombre: string= "JP YAMATO"
  
  navegar(): void {
    console.log("El barco esta siendo navegado");
  }
  encender(): void {
      console.log("El barco esta siendo encendido")
  }
  detener(): void {
      console.log("El barco esta siendo detenido")
  }
  acelerar(): void {
      console.log("El barco esta siendo acelerado")
  }
  anclar(): void {
      console.log("El barco esta siendo anclado")
  }
  
}
let barco = new Barco();
console.log("Hola, gracias por confiar la construccion de su barco a nuestro astillero, el barco modelo " + barco.modelo + 
" de la compañia " + barco.fabricante + " que consta de " + barco.Helices + " helices y " + barco.numeroAnclas + " anclas culminara su construccion en 2 meses y se le asignara el nombre de " + 
barco.nombre + " segun especifico el cliente")
//yate
class Yate implements IvehiculoMaritimo {
  numeroAnclas: number = 1;
  modelo: string= "jet";
  fabricante: string= "yatesheep";
  encender(): void {
    console.log("El yate esta siendo encendido")
  }
  detener(): void {
    console.log("El yate esta siendo detenido")
  }
  acelerar(): void {
    console.log("El yate esta siendo acelerado")
}
  navegar(): void {
    console.log("el yate esta navegando")  
  }
  anclar(): void {
    console.log("el yate esta anclado")
  }
}
let yate = new Yate();
console.log("Hola, gracias por confiar la construccion de su barco a nuestro astillero, el barco modelo " + barco.modelo + 
" de la compañia " + yate.fabricante  + " helices y " + yate.numeroAnclas + " anclas culminara su construccion en 2 meses y se le asignara el nombre de " + " segun especifico el cliente")
//camioneta
class Camioneta implements IVehiculo {
  modelo: string = "4x2";
  fabricante: string = "Casabaca";
  numeroLlantas: number = 4;
  placa!: string;

  conducir(): void {
    console.log("El vehiculo esta siendo conducido");
  }
  encender(): void {
      console.log("El vehiculo esta siendo encendido")
  }
  detener(): void {
      console.log("El vehiculo esta siendo detenido")
  }
  acelerar(): void {
      console.log("El vehiculo esta siendo acelerado")
  }

}
let camioneta = new Camioneta();
console.log("Hola, gracias por confiar la construccion de su camioneta a nuestro astillero, el camioneta modelo " + camioneta.modelo + 
" de la compañia " + camioneta.fabricante )

//Camion
class Camion implements IVehiculo {
  modelo: string = "4x2";
  fabricante: string = "Casabaca";
  numeroLlantas: number = 4;
  placa!: string;
  peso:string = "56kg"

  conducir(): void {
    console.log("El camion esta siendo conducido");
  }
  encender(): void {
      console.log("El camion esta siendo encendido")
  }
  detener(): void {
      console.log("El camion esta siendo detenido")
  }
  acelerar(): void {
      console.log("El camion esta siendo acelerado")
  }
  movergruavalde(): void{
    console.log("el camion se encuentra trabajando con la grua del valde")
  }

}
let camion = new Camion();
console.log("Hola, gracias por confiar la construccion de su camion a nuestro astillero, el camion modelo " + camion.modelo + 
" de la compañia " + camion.fabricante )

//automovil
class Automovil implements IVehiculo {
  modelo: string = "4x2";
  fabricante: string = "Casabaca";
  numeroLlantas: number = 4;
  placa!: string;

  conducir(): void {
    console.log("El automovil esta siendo conducido");
  }
  encender(): void {
      console.log("El automovil esta siendo encendido")
  }
  detener(): void {
      console.log("El automovil esta siendo detenido")
  }
  acelerar(): void {
      console.log("El automovil esta siendo acelerado")
  }

}

function procesar (vehiculo: IVehiculoTerrestre){
  vehiculo.encender();
  vehiculo.detener();
}
let automovil = new Automovil();
console.log("Hola, gracias por confiar la construccion de su automovil a nuestro astillero, el automovil modelo " + automovil.modelo + 
" de la compañia " + automovil.fabricante )
//Avion
class Avion implements IvehiculoAereo{
  longitud: string = "31,2 m"
  numeroTurbinas: number = 2;
  modelo: string = "Comercial";
  fabricante: string ="Aerolan";
  encender(): void {
    console.log("El avion se esta prendiendo")
  }
  detener(): void {
    console.log("El avion se esta deteniendo")

  }
  acelerar(): void {
    console.log("El avion se esta acelerando")

  }    

  volar(): void {
    console.log("El avion se esta en vuelo")

  }
  despegar(): void {
    console.log("El avion se esta despegando del suelo")

  }
  aterrizar(): void {
    console.log("El avion esta aterrizando")

  }

}
//Avioneta
class Avioneta implements IvehiculoAereo{
  longitud: string = "31,2 m"
  numeroTurbinas: number = 2;
  modelo: string = "Comercial";
  fabricante: string ="Aerolan";
  encender(): void {
    console.log("La Avioneta se esta prendiendo")
  }
  detener(): void {
    console.log("La Avioneta se esta deteniendo")

  }
  acelerar(): void {
    console.log("La Avioneta se esta acelerando")

  }    

  volar(): void {
    console.log("La Avioneta se esta en vuelo")

  }
  despegar(): void {
    console.log("La Avioneta se esta despegando del suelo")

  }
  aterrizar(): void {
    console.log("La Avioneta esta aterrizando")

  }

}