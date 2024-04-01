// // let amol = {
// //     firstName:"amol",
// //     lastName:"rao",
// //     displayName:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }

// // console.log(amol.firstName)
// // console.log(amol.lastName)
// // amol.displayName()

// // function contructor 

// function Person(fn,ln){
//     this.firstName = fn 
//     this.lastName = ln
//     // this.displayName = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }

// }
// let amol = new Person("amol2","rao2")
// let chinmay = new Person("chinmay2","deshpande")
// console.log(amol)
// console.log(chinmay)

// // every object has __proto__ === Parent.protype

// console.log(amol.__proto__ === Person.prototype)
// console.log(chinmay.__proto__ === Person.prototype)
// Person.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.city = "pune"

// amol.displayName()
// chinmay.displayName()

// console.log(amol instanceof Person)
// console.log(chinmay instanceof Person)

// console.log(amol.hasOwnProperty('firstName'))
// console.log(amol.hasOwnProperty('lastName'))
// console.log(amol.city)
// console.log(chinmay.city)


// let names = ["chinmay","sarika"]
// console.log(names)
// console.log(names.__proto__ === Array.prototype)
// names.pop()

// Es6 class 

class Person {
    //country = "india"
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let hemant = new Person("hemant","deshpande")
let sarika = new Person("sarika","pansare")
console.log(hemant)
console.log(sarika)
sarika.displayName()
hemant.displayName()

// Object.create()
let info = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let sarikaE = Object.create(info)
console.log(sarikaE)
sarikaE.init("sarika","pansare")
sarikaE.displayName()