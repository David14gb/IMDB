import { Movie } from "./movie";
import { Professional } from "./profesional";
import { antonio, belen, pedro, penelope, sofia } from "./profesionalTest";





export let thor = new Movie("Thor", 2011, "Estados Unidos", "Acción/Fantasía");

thor.language = ("Español")
thor.actors =["Antonio", "Belen", "Penelope"]
thor.director = "Pedro"
thor.writer = "Sofia"
thor.plataform = "Disney"
thor.isMCU = true
thor.mainCharacterName = "Thor"
thor.producer = "David"
thor.distributor = "Lidia"
thor.printAll();



export let losPitufos = new Movie("Los pitufos", 2011, "Estados Unidos", "Acción/Fantasía");

losPitufos.language = "Español"
losPitufos.actors =["Pitufo1", "Pitufo2", "Pitufo3"]
losPitufos.director = "Director pitufo"
losPitufos.writer = "Guionista pitufo"
losPitufos.plataform = "Disney"
losPitufos.isMCU = false
losPitufos.mainCharacterName = "Pitufo"
losPitufos.producer = "Pitufo David"
losPitufos.distributor = "Pitufa Lidia"
losPitufos.printAll();




