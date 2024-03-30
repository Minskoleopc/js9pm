//object literal 
let amol  = {
    firstName:'amol',
    lastName:"rao",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(amol.firstName)
console.log(amol.lastName)
amol.displayName()


let chinmay  = {
    firstName:'chinmay',
    lastName:"deshpande",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(amol.firstName)
console.log(amol.lastName)
amol.displayName()

// program 2
// function constructor 

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }

}

let amole  = new Person("amol","rao")
console.log(amole)
amole.displayName()


function Vehicle(color,type){
    this.color = color 
    this.type = type
    this.displayColor = function(){
        console.log(this.color)
    }
}
let audi = new Vehicle("blue","sedane")
let bmw = new Vehicle("red","SUV")

console.log(audi)
console.log(bmw)
bmw.displayColor()

// Es6 


class PersonC  {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class VehicleC {
    constructor(color,type){

        this.color = color
        this.type = type
    }

    displayColor(){
        console.log(this.color)
    }
}

let audiB = new VehicleC("blue","sedance")
let amolP = new PersonC ("amolP","raop")

// Object.create()

let audiC = Object.create({})
console.log(audiC)
audiC.color = "red"
audiC.type = "sedane"
audiC.displayColor = function(){
    console.log(this.color)
}
console.log(audiC)



