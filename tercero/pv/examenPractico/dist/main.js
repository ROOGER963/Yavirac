"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("  Roger Pineda ");
let clientes = [];
let vendedores = [];
var Seccion;
(function (Seccion) {
    Seccion["mujeres"] = "Mujeres";
    Seccion["hombres"] = "Hombres";
    Seccion["ni\u00F1os"] = "Ni\u00F1os";
})(Seccion || (Seccion = {}));
function readFromHtml(id) {
    return document.getElementById(id).value;
}
function addVendedor() {
    let currentVendedor = {
        ced: parseInt(readFromHtml("cedulaVendedor")),
        nombre: readFromHtml("nombreVendedor"),
        email: readFromHtml("emailVendedor"),
        telefono: readFromHtml("telefonoVendedor"),
        producto: readFromHtml("productoVendedor"),
        seccion: readFromHtml("seccionVendedor"),
        precio: parseInt(readFromHtml("precioProductoVendedor")),
    };
    vendedores.push(currentVendedor);
    console.table(vendedores);
    initSelect();
}
function addClient() {
    let currentCliente = {
        ced: parseInt(readFromHtml("cedulaCliente")),
        nombre: readFromHtml("nombreCliente"),
        email: readFromHtml("emailCliente"),
        telefono: readFromHtml("telefonoCliente"),
        producto: readFromHtml("prodcutoCliente"),
        precioventa: parseInt(readFromHtml("precioventa")),
    };
    clientes.push(currentCliente);
    console.table(clientes);
}
function initSelect() {
    let seccionVendedor = document.getElementById("seccionVendedor");
    document.querySelectorAll("#seccionVendedor option").forEach(option => option.remove());
    let secciones = Object.values(Seccion);
    secciones.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        seccionVendedor.add(option);
    });
}
initSelect();
