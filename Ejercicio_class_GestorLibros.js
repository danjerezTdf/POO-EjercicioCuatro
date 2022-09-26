"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var readlineSync = require('readline-sync');
// modelo Clase GestorLibros
var GestorLibros = /** @class */ (function () {
    function GestorLibros(pNamebookshop, pListBook) {
        this.bookshop = pNamebookshop;
        this.listBook = pListBook;
    }
    GestorLibros.prototype.getBook = function (i) {
        var book = this.listBook[i];
        return book;
    };
    GestorLibros.prototype.setBookshop = function (nameBookshop) {
        this.bookshop = nameBookshop;
    };
    GestorLibros.prototype.getBookshop = function () {
        return this.bookshop;
    };
    GestorLibros.prototype.insetBook = function (book) {
        this.listBook.push(book);
        console.log("Se Agrego Libro " + book.getTitulo());
    };
    GestorLibros.prototype.findBook = function (titleBook) {
        for (var i = 0; i < this.listBook.length; i++) {
            if (titleBook === this.listBook[i].getTitulo()) {
                return this.getBook(i);
            }
        }
        console.log("No se encontor Libro");
        // return this.getBook(-1);   
    };
    GestorLibros.prototype.changeBook = function (titleBook) {
        for (var i = 0; i < this.listBook.length; i++) {
            if (titleBook === this.listBook[i].getTitulo()) {
                this.listBook[i].setTitulo(readlineSync.question("Ingrese Titulo Nuevo: "));
                this.listBook[i].setAutor(readlineSync.question("Ingrese Autor: "));
                this.listBook[i].setAnio(readlineSync.questionInt("Ingrese Anio: "));
                this.listBook[i].setIdioma(readlineSync.question("Ingrese Ideoma: "));
                console.log("Se Modifico Libro " + this.listBook[i].getTitulo());
                return this.listBook[i];
            }
        }
        console.log("No se Encontro Libro");
        //return this.getBook(-1)
    };
    GestorLibros.prototype.deleteBook = function (titleBook) {
        for (var i = 0; i < this.listBook.length; i++) {
            if (titleBook === this.listBook[i].getTitulo()) {
                console.log("Se Borro libro " + this.listBook[i].getTitulo());
                this.listBook.splice(i, 1);
            }
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
