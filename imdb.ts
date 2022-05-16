export class Professional{
    public name:string
    public age:number
    public genre:string
    public weight:number
    public height:number
    public hairColor:string
    public eyeColor:string
    public race:string
    public isRetired:boolean
    public nationality:string
    public oscarsNumber:number
    public profession:string
    
    constructor(name:string, age:number, genre:string, weight:number, height:number, hairColor:string, 
        eyeColor:string, race:string, isRetired:boolean, nationality:string, oscarsNumber:number, profession:string){
            this.name = name
            this.age = age
            this.genre = genre
            this.weight = weight
            this.height = height
            this.hairColor = hairColor
            this.eyeColor = eyeColor
            this.race = race
            this.isRetired = isRetired
            this.nationality = nationality
            this.oscarsNumber = oscarsNumber
            this.profession = profession
        }
        print():void{
            console.log("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight
            + "\n" + "Height: " + this.height + "\n" + "HairColor: " + this.hairColor + "\n" + "EyeColor" + this.eyeColor + "\n" + "Race: " + this.race
            + "\n" + "IsRetired: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "OscarsNumber: " + this.oscarsNumber
            + "\n" + "Porfession: " + this.profession);
        }

}

export class Movie {
    public title:string
    public releaseYear:number
    public actors:string[]
    public nacionality:string
    public director:string
    public writer:string 
    public language:string
    public plataform:string
    public isMCU:boolean //Marvel
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title
        this.releaseYear = releaseYear
        this.nacionality = nacionality
        this.genre = genre
        this.distributor;

    }

    printAll():void{
        console.log(this.title + "\n" + this.releaseYear + "\n" + this.actors
        + "\n" + this.nacionality + "\n" + this.director + "\n" + this.writer
        + "\n" + this.language + "\n" + this.plataform + "\n" + this.isMCU
        + "\n" + this.mainCharacterName + "\n" + this.producer
        + "\n" + this.distributor + "\n" + this.genre);
        
    }
    

}

export class Imdb {
    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas
        
    }
    printAllMovies():void{
        console.log(this.peliculas);
        
    }
}