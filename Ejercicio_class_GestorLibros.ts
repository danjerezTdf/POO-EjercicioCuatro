// Importo Clase Libro para componer y modulo readline-sinc para entrada por consola en metodo
import {Libro} from "./Ejercicio_class_Libro"
let readlineSync = require('readline-sync');

// modelo Clase GestorLibros
export class GestorLibros{
    private bookshop: string;
    private listBook : Libro [];

    constructor(pNamebookshop: string, pListBook: Libro[]){
        this.bookshop = pNamebookshop;
        this.listBook = pListBook;
    }

    private getBook(i:number):Libro{
        let book = this.listBook[i]
        return book;
    }

    public setBookshop (nameBookshop: string){
        this.bookshop = nameBookshop;
    }

    public getBookshop () :string{
        return this.bookshop;
    }

    public insetBook(book: Libro):void {
        this.listBook.push(book);
        console.log("Se Agrego Libro "+ book.getTitulo());
    }
    public findBook(titleBook: string):Libro{
        for (let i = 0; i < this.listBook.length; i++) {
            if (titleBook === this.listBook[i].getTitulo()){
                return this.getBook(i);
            }        
        }
        console.log("No se encontor Libro")
      return this.getBook(-1);   
    }
    public changeBook(titleBook: string): Libro {
        for (let i = 0; i < this.listBook.length;i++) {
            if (titleBook === this.listBook[i].getTitulo()){
                this.listBook[i].setTitulo(readlineSync.question("Ingrese Titulo Nuevo: "));
                this.listBook[i].setAutor(readlineSync.question("Ingrese Autor: "));
                this.listBook[i].setAnio(readlineSync.questionInt("Ingrese Anio: "));
                this.listBook[i].setIdioma(readlineSync.question("Ingrese Ideoma: "));
                console.log("Se Modifico Libro " + this.listBook[i].getTitulo());
                return this.listBook[i]
            }
        }
        console.log("No se Encontro Libro")
        return this.getBook(-1)
    }
    public deleteBook(titleBook: string): void {
        for (let i = 0; i < this.listBook.length;i++) {
            if (titleBook === this.listBook[i].getTitulo()){
                this.listBook.splice(i, 1);
                console.log("Se Borro libro "+ this.listBook[i].getTitulo());
            }
        }
    }

}