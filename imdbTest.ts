import{ Professional}from "./imdb"
import{ Movie}from "./imdb"
import{ Imdb}from "./imdb"


let antonio = new Professional("Antonio", 62, "Cine", 70, 170, "Negro", "Marrones", "Actor", false, "Española", 0, "Actor");
antonio.print();

let mario = new Professional("mario", 32, "Cine", 70, 170, "Negro", "Marrones", "Actor", false, "Española", 0, "Actor");
mario.print();

let belen = new Professional("Belen", 50, "Cine", 69, 170, "Negro", "Marrones", "Actriz", false, "Española", 0, "Actor");
belen.print();

let penelope = new Professional("Penelope", 48, "Cine", 65, 165, "Negro", "Marrones", "Actriz", false, "Española", 0, "Actor");
penelope.print();

let ursula = new Professional("Penelope", 32, "Cine", 65, 163, "Negro", "Marrones", "Actriz", false, "Española", 0, "Actor");
ursula.print();




let thor = new Movie("Thor", 2011, "Estados Unidos", "Acción/Fantasía");
thor.printAll();

let ar:Movie[] = [thor]
let dataBase = new Imdb(ar)

dataBase.printAllMovies();
