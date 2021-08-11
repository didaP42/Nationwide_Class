const Host={
    name:"Dahlia", 
    occupation: "Florist",

    saySpecs(){
        console.log("My name is "+Host.name+ ". My occupation is " +Host.occupation)
    }

    
}
Host.saySpecs()

class BasicHosts{
    constructor(name,occupation){
       this.name = name;
       this.occupation = occupation

    }

       saySpecs(){
           return ('My name is ' +this.name+ '. My occupation is ' + this.occupation)

       }

}

const host = new BasicHosts("Roget", "creator of Roget's Thesaurus");
console.log(host.saySpecs())

const host2 = new BasicHosts("Dolores", "seer of stars");
console.log(host2.saySpecs())

const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

   const hostArray = []

   for (let i = 0; i <=100; i++){
       let ranNames = Math.floor(Math.random()* names.length)
       let ranOcc = Math.floor(Math.random()* occupations.length)

       hostArray.push(new BasicHosts(names[ranNames],occupations[ranOcc]))

   }
   console.log(hostArray)

   console.log(hostArray[55].saySpecs())