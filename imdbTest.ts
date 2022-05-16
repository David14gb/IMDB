
import{ Imdb}from "./imdb"
import { Movie } from "./movie";
import { losPitufos, thor } from "./movieTest";



let ar:Movie[] = [thor, losPitufos]
export let dataBase = new Imdb(ar)

dataBase.printAllMovies();

let dataJson = JSON.stringify(dataBase)

console.log(dataJson);

const fs = require("fs-extra");
fs.writeFileSync('imdbBBDD.json', dataJson);