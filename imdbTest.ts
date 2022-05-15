import{ Professional}from "./imdb"
import{ Movie}from "./imdb"
import{ Imdb}from "./imdb"


let antonio = new Professional("Antonio", 62, "Cine", 70, 170, "Negro", "Marrones", "Actor", false, "Española", 0, "Actor");
antonio.print();

let thor = new Movie("Thor", 2011, "Estados Unidos", "Acción/Fantasía");
thor.printAll();

let ar:Movie[] = [thor]
let dataBase = new Imdb(ar)

dataBase.printAllMovies();