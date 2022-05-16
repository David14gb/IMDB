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