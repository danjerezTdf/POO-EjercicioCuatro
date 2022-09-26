"use strict";
exports.__esModule = true;
exports.Libro = void 0;
// Modelo y exporto Clase Libro
var Libro = /** @class */ (function () {
    function Libro(pTitulo, pAutor, pAnio, pIdioma) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.anio = pAnio;
        this.idioma = pIdioma;
    }
    Libro.prototype.setTitulo = function (Titulo) {
        this.titulo = Titulo;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setAutor = function (Autor) {
        this.autor = Autor;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Libro.prototype.getAnio = function () {
        return this.anio;
    };
    Libro.prototype.setIdioma = function (idioma) {
        this.idioma = idioma;
    };
    Libro.prototype.getIdioma = function () {
        return this.idioma;
    };
    return Libro;
}());
exports.Libro = Libro;
