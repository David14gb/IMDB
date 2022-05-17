
import{ Imdb}from "./imdb"
import { Movie } from "./movie";
import { losPitufos, thor } from "./movieTest";



export let ar:Movie[] = [thor, losPitufos]
let dataBase = new Imdb(ar)

dataBase.printAllMovies();

let dataJson = JSON.stringify(dataBase)

console.log(dataJson);

const fs = require("fs-extra");
fs.writeFileSync('imdbBBDD.json', dataJson);

let data = fs.readFileSync('imdbBBDD.json');
let dataObje = JSON.parse(data);
console.log(dataObje);

let instan = new Imdb(dataObje);

let ar2:Movie[]= [losPitufos, thor]
let videoClubLidia = new Imdb(ar2)
videoClubLidia.escribirEnFicheroJSON('videoclubLidia.json')

console.log(videoClubLidia.obtenerInstanciaIMDB('videoclubLidia.json'));

