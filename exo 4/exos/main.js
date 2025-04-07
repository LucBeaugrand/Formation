//Exo 1
class Car {
    model;

    constructor(content){
        this.model = content
    }
  
    drive() {
      return `Driving a ${this.model}`;
    }
}

const peugeot = new Car("Peugeot");
console.log(peugeot.drive());

//Exo 2
function Book(name){
    this.title = name
}

Book.prototype.read = function(){
    return `Reading ${this.title}`
}

let harrypotter = new Book("Harry Potter")
console.log(harrypotter.read())

//Exo 3
class Vehicle{
    contructor(){
    }

    start(){
        return `Starting vehicule`
    }
}

class Voiture extends Vehicle{
    honk(){
        return `Pouet pouet`
    }
}

let voiture = new Voiture()
console.log(voiture.start())
console.log(voiture.honk())

//Exo 4
class Safe{
    #code
    constructor(content){
        this.#code=content
    }
    unlock(){
        return this.#code
    }
}

let safe = new Safe("Cheval")
console.log(safe.unlock())
