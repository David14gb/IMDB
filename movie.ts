import { Professional } from "./profesional"

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
        this.actors
        this.director
        this.writer
        this.language
        this.plataform
        this.isMCU
        this.mainCharacterName
        this.producer
        this.distributor
    }

    public setActors(actors:string[]){
        this.actors = actors
    }
    public setDirector(director:string){
        this.director = director
    }
    public setWriter(writer:string){
        this.writer = writer
    }
    public setLanguage(language:string){
        this.language = language
    }
    public setPlataform(plataform:string){
        this.plataform = plataform
    }
    public setIsMCU(isMCU:boolean){
        this.isMCU = isMCU
    }
    public setMainCharacterName(mainCharacterName:string){
        this.mainCharacterName = mainCharacterName
    }
    public setProducer(producer:string){
        this.producer = producer
    }
    public setDistributor(distributor:string){ 
        this.distributor = distributor
    }

    printAll():void{
        console.log(this.title + "\n" + this.releaseYear + "\n" + this.actors
        + "\n" + this.nacionality + "\n" + this.director + "\n" + this.writer
        + "\n" + this.language + "\n" + this.plataform + "\n" + this.isMCU
        + "\n" + this.mainCharacterName + "\n" + this.producer
        + "\n" + this.distributor + "\n" + this.genre);
        
    }

    

}
