// HAMSTER

// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
    constructor(owner,name,price){
    this.owner = owner
    this.name = name
    this.price = price

    }

    wheelRun(){
       this.wheelRun = console.log ("squeak squeak")
    }
eatFood(){
   this.eatFood = console.log("nibble nibble")
}
getPrice(){

  return this.price

}
}

console.log()
