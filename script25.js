// let ram = {
//     first_name:"ram",
//     last_name:"dani",
//     displayName:function(){
//         console.log(this.first_name + this.last_name)
//     }
// }

// let sayali = {
//     first_name:"sayli",
//     last_name:"jogi",
//     displayName:function(){
//         console.log(this.first_name + this.last_name)
//     }
// }

// program 2

// class Person {
//     first_name = "chinmay"
//     last_name = "deshpande"
//     displayName(){
//         console.log(this.first_name + this.last_name)
//     }
// }

// let amole = new Person()
// let chinmaye = new Person()
// chinmaye.first_name = "chinmay s"


// program 3 
// // constructor
// class PersonD {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// let ninad = new PersonD("ninad","dani")
// let amol = new PersonD("amol","deshpande")


// // program 4

// class PersonE {

//     setFirstName(fn){
//         this.firstName = fn
//     }

//     setLastName(ln){
//         this.lastName = ln
//     }

//     getFirstName(){
//         return this.firstName
//     }

//     getLastName(){
//         return this.lastName
//     }

// }

// let amolb = new PersonE()
// amolb.setFirstName("amolb")
// amolb.setLastName("rao")

// program 5

let info = {
    first_name:"chinmay",
    last_name:"deshpande"
}

info.first_name = "ram"
info.city = "pune"


class PersonE {

    set fn(fn){
        this.first_name = fn
    }
    set ln(ln){
        this.last_name = ln
    }

    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }

}

let ninad = new PersonE()
ninad.fn = "ninad"
ninad.ln = "dani"




























