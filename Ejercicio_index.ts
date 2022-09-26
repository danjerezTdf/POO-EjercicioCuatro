//Importo Clases Necesarias
import { Libro } from './Ejercicio_class_Libro';
import { GestorLibros } from './Ejercicio_class_GestorLibros';

// Importo Modulo de lectora por consola
 import * as fs from 'fs';
let readlineSync = require('readline-sync');

// Se instancian libros
let libroA = new Libro("Relatos cortos","Anton Chejov",1886,"Ruso");
let libroB = new Libro("Nostromo","Joseph Conrad",1904,"Ingles");
let libroC = new Libro("Grandes Esperanzas","Charles Dickens",1861,"Ingles");
let libroD = new Libro("Jacques el fatalista","Denis Diderot",1796,"Frances");
let libroE = new Libro("Berlin Alexanderplatz","Alfred Doblin",1929,"Aleman");
let libroF = new Libro("Crimen y castigo","Fiodor Dostoievski",1866,"Ruso");
let libroG = new Libro("El idiota","Fiodor Dostoievski",1869,"Ruso");
let libroH = new Libro("Los endemoniados","Fiodor Dostoievski",1872,"Ruso");
let libroI = new Libro("Los hermanos Karamazov","Fiodor Dostoievski",1880,"Ruso");
let libroJ = new Libro("Middlemarch","George Eliot",1871,"Ingles");
let libroK = new Libro("El hombre invisible","Ralph Ellison",1952,"Ingles");

let libroL = new Libro("El viejo y el mar","Ernest Hemingway",1952,"Ingles");

// Se crea Array de libros
let listBookOne : Libro[] = [libroA,libroB,libroC,libroD,libroC,libroD,libroE,libroF,libroG,libroH,libroI,libroJ,libroK];

// Se instancia Gestor de Libros (libreria)

let bookshopOne : GestorLibros = new GestorLibros("La Tribu Del Papel",listBookOne);

// Consulto Nombre de la Libreria 

console.log("------------------------------------------------------------");
console.log("Nuetra Libreria se llama: "+ bookshopOne.getBookshop());
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

// leo Libros de una TXT

const fileName: string = './bbdd_libros_01.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');
console.log("------------------------------------------------------------");
console.log(fileContent);
console.log("------------------------------------------------------------");





