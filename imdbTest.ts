
import{ Imdb}from "./imdb"
import { Movie } from "./movie";
import { losPitufos, thor } from "./movieTest";



let ar:Movie[] = [thor, losPitufos]
let dataBase = new Imdb(ar)

dataBase.printAllMovies();