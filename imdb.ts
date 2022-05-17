import { Movie } from "./movie"
const fs = require("fs-extra");
export class Imdb {
    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas
        
    }
    printAllMovies():void{
        console.log(this.peliculas);
        
    }
    escribirEnFicheroJSON(nombreFichero: string):void{
        let pelisLidia:string = JSON.stringify(this.peliculas)
        fs.writeFileSync(nombreFichero, pelisLidia);
    }
    obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        let data = fs.readFileSync(nombreFichero)
        let dataObje = JSON.parse(data);
        return dataObje
    }   
}