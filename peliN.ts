import { Imdb } from "./imdb";
import { ar } from "./imdbTest";
import { Movie } from "./movie";

const fs = require("fs");
const ps = require("prompt-sync");
const prompt = ps();


let title = prompt("Title: ");
let releaseYear = prompt("ReleadseYear: ");
let nacionality = prompt("Nacionality: ");
let genre = prompt("Genre: ");

let peli = new Movie(title, releaseYear, nacionality, genre);

peli.actors = prompt("Actors: ");
peli.director = prompt("Director: ");
peli.writer = prompt("Writer: ");
peli.language = prompt("Language: ");
peli.plataform = prompt("Plataform: ");
peli.isMCU = Boolean(prompt("IsMCU: "));
peli.mainCharacterName = prompt("MainCharacterName: ");
peli.producer = prompt("Producer: ")
peli.distributor = prompt("Distributor: ");

let base = new Imdb([]);

base.obtenerInstanciaIMDB('imdbBBDD.json');
base.peliculas.push(peli);
base.escribirEnFicheroJSON('imdbBBDD.json');



