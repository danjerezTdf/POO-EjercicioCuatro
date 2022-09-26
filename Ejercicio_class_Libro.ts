export class Libro {
    private titulo: string;
    private autor: string;
    private anio: number;
    private idioma: string;

    constructor (pTitulo: string, pAutor: string, pAnio: number,pIdioma: string) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.anio = pAnio;
        this.idioma = pIdioma;
        
    }

    public setTitulo(Titulo: string): void {
        this.titulo = Titulo;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setAutor(Autor: string): void {
        this.autor = Autor;
    }
    public getAutor(): string {
        return this.autor;
    }
    public setAnio(anio:number): void {
        this.anio = anio;
    }
    public getAnio(): number {
        return this.anio;
    }
    public setIdioma(idioma: string): void {
        this.idioma = idioma;
    }
    public getIdioma(): string {
        return this.idioma;
    }

}