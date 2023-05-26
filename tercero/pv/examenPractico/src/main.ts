console.log(" ")
import { Cliente } from "./entientes/Cliente";
import { Vendedor } from "./entientes/Vendedor";

let clientes: Cliente[] = [];
let vendedores: Vendedor[] = [];

enum Seccion {
    mujeres = "Mujeres",
    hombres = "Hombres",
    niños = "Niños"
}


function readFromHtml(id: string):string {
    return (<HTMLInputElement> document.getElementById(id)).value;
}

function addVendedor(): void{
    let currentVendedor:Vendedor = 
    {
        ced: parseInt(readFromHtml("cedulaVendedor")),
        nombre: readFromHtml("nombreVendedor"),
        email:readFromHtml("emailVendedor"),
        telefono: readFromHtml("telefonoVendedor"),
        producto:readFromHtml("productoVendedor"),
        seccion: readFromHtml("seccionVendedor"),
        precio: parseInt(readFromHtml ("precioProductoVendedor")),
    } 
    vendedores.push(currentVendedor);
    console.table(vendedores);

    initSelect();
}

function addClient(): void{
    let currentCliente:Cliente = 
    {
        ced: parseInt(readFromHtml("cedulaCliente")),
        nombre: readFromHtml("nombreCliente"),
        email:readFromHtml("emailCliente"),
        telefono: readFromHtml("telefonoCliente"),
        producto: readFromHtml("prodcutoCliente"),
        precioventa: parseInt(readFromHtml("precioventa")),


    } 
    clientes.push(currentCliente);
    console.table(clientes);
}

function initSelect():void{

    let seccionVendedor =  document.getElementById("seccionVendedor") as HTMLSelectElement;

    document.querySelectorAll("#seccionVendedor option").forEach(option => option.remove());

    let secciones = Object.values(Seccion);
    secciones.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value;
            option.text = value;
            seccionVendedor.add(option);
        }
    );
}
initSelect()