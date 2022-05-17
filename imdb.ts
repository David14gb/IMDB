import { Movie } from "./movie"

export class Imdb {
    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas
        
    }
    printAllMovies():void{
        console.log(this.peliculas);
        
    }
    escribirEnFicheroJSON(nombreFichero: string):void{
        const fs = require("fs-extra");
       console.log(fs.writeFileSync('videoclub.json', nombreFichero));
    }   
}