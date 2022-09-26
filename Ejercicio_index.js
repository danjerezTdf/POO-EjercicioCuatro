"use strict";
exports.__esModule = true;
//Importo Clases Necesarias
var Ejercicio_class_Libro_1 = require("./Ejercicio_class_Libro");
var Ejercicio_class_GestorLibros_1 = require("./Ejercicio_class_GestorLibros");
// Importo Modulo de lectora por consola
// import * as fs from 'fs';
var readlineSync = require('readline-sync');
// Se instancian libros
var libroA = new Ejercicio_class_Libro_1.Libro("Relatos cortos", "Anton Chejov", 1886, "Ruso");
var libroB = new Ejercicio_class_Libro_1.Libro("Nostromo", "Joseph Conrad", 1904, "Ingles");
var libroC = new Ejercicio_class_Libro_1.Libro("Grandes Esperanzas", "Charles Dickens", 1861, "Ingles");
var libroD = new Ejercicio_class_Libro_1.Libro("Jacques el fatalista", "Denis Diderot", 1796, "Frances");
var libroE = new Ejercicio_class_Libro_1.Libro("Berlin Alexanderplatz", "Alfred Doblin", 1929, "Aleman");
var libroF = new Ejercicio_class_Libro_1.Libro("Crimen y castigo", "Fiodor Dostoievski", 1866, "Ruso");
var libroG = new Ejercicio_class_Libro_1.Libro("El idiota", "Fiodor Dostoievski", 1869, "Ruso");
var libroH = new Ejercicio_class_Libro_1.Libro("Los endemoniados", "Fiodor Dostoievski", 1872, "Ruso");
var libroI = new Ejercicio_class_Libro_1.Libro("Los hermanos Karamazov", "Fiodor Dostoievski", 1880, "Ruso");
var libroJ = new Ejercicio_class_Libro_1.Libro("Middlemarch", "George Eliot", 1871, "Ingles");
var libroK = new Ejercicio_class_Libro_1.Libro("El hombre invisible", "Ralph Ellison", 1952, "Ingles");
var libroL = new Ejercicio_class_Libro_1.Libro("El viejo y el mar", "Ernest Hemingway", 1952, "Ingles");
// Se crea Array de libros
var listBookOne = [libroA, libroB, libroC, libroD, libroC, libroD, libroE, libroF, libroG, libroH, libroI, libroJ, libroK];
// Se instancia Gestor de Libros (libreria)
var bookshopOne = new Ejercicio_class_GestorLibros_1.GestorLibros("La Tribu Del Papel", listBookOne);
// Consulto Nombre de la Libreria 
console.log("------------------------------------------------------------");
console.log("Nuetra Libreria se llama: " + bookshopOne.getBookshop());
console.log("------------------------------------------------------------");
// Agrego libroL a la libreria
console.log("------------------------------------------------------------");
bookshopOne.insetBook(libroL);
console.log("------------------------------------------------------------");
// Consultamos por el Libro "El idiota"
console.log("------------------------------------------------------------");
console.log(bookshopOne.findBook("El idiota"));
console.log("------------------------------------------------------------");
// Cambiamos Ideoma del Libro "Crimen y castigo"
console.log("------------------------------------------------------------");
bookshopOne.changeBook("Crimen y castigo");
console.log("------------------------------------------------------------");
// se borra el libro "Middlemarch"
console.log("------------------------------------------------------------");
bookshopOne.deleteBook("Middlemarch");
console.log("------------------------------------------------------------");
