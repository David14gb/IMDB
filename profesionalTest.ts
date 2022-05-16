import { Professional } from "./profesional";


//ACTORES
export let antonio = new Professional("Antonio", 62, "Cine", 70, 170, "Negro", "Marrones", "Actor", false, "Española", 0, "Actor");
antonio.print();

export let belen = new Professional("Belen", 50, "Cine", 69, 170, "Negro", "Marrones", "Actriz", false, "Española", 0, "Actor");
belen.print();

export let penelope = new Professional("Penelope", 48, "Cine", 65, 165, "Negro", "Marrones", "Actriz", false, "Española", 0, "Actriz");
penelope.print();

export let ursula = new Professional("Penelope", 32, "Cine", 65, 163, "Negro", "Marrones", "Actriz", false, "Española", 0, "Actriz");
ursula.print();

//ESCRITORES
export let adolfo = new Professional("Adolfo", 48, "Cine", 85, 183, "Negro", "Marrones", "Escritor", true, "Española", 0, "Escritor");
adolfo.print();

export let margarita = new Professional("Margarita", 58, "Cine", 65, 173, "Negro", "Marrones", "Escritora", false, "Española", 0, "Escritora");
margarita.print();

export let sofia = new Professional("Sofia", 48, "Cine", 65, 163, "Negro", "Marrones", "Escritora", false, "Española", 0, "Escritora");
sofia.print();

//DIRECTORES

export let isabelcoixet = new Professional("Isabel Coixet", 58, "Cine", 68, 163, "Negro", "Marrones", "Dirrectora", false, "Española", 0, "Directora");
isabelcoixet.print();

export let iciarBollain = new Professional("Iciar Bollain", 62, "Cine", 68, 163, "Negro", "Marrones", "Dirrectora", false, "Española", 0, "Directora");
iciarBollain .print();

export let pedro = new Professional("Pedro Almodovar", 58, "Cine", 68, 163, "Negro", "Marrones", "Dirrector", true, "Española", 2, "Director");
pedro.print();