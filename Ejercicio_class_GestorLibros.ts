import {Libro} from "./class_Libro"
let readlineSync = require('readline-sync');

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
    }
    public findBook(titleBook: string):Libro | undefined{
        for (let i = 0; i < this.listBook.length; i++) {
            if (titleBook === this.listBook[i].getTitulo()){
                return this.getBook(i);
            }        
        }
        console.log("No se encontor Libro")
    //    return this.getBook(-1);   
    }
    public changeBook(titleBook: string): void {
        for (let i = 0; i < this.listBook.length;i++) {
            if (titleBook === this.listBook[i].getTitulo()){
                this.listBook[i].setTitulo(readlineSync.question("Ingrese Titulo Nuevo: "));
                this.listBook[i].setAutor(readlineSync.question("Ingrese Autor: "));
                this.listBook[i].setAnio(readlineSync.questionInt("Ingrese Año: "));
                this.listBook[i].setIdioma(readlineSync.question("Ingrese Editorial: "));
                console.log("Se Modifico Libro " + this.listBook[i])
            }
        }
        console.log("No se Encontro Libro")
    }
    public deleteBook(titleBook: string): void {
        for (let i = 0; i < this.listBook.length;i++) {
            if (titleBook === this.listBook[i].getTitulo()){
                this.listBook.splice(i, 1);
            }
        }
    }

}