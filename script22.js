// object literal 

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }


// class Person {
//     first_name  = "chinmay"
//     last_name = "deshpande"

//     displayName(){
//         console.log(this.first_name + this.last_name)
//     }
// }
// let amolE =  new Person()
// let chinmayE =  
// console.log(chinmayE)
// amolE.first_name = "amolE"
// amolE.last_name = "raoE"


// program 2
// class PersonB {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln 
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amolB = new PersonB("amolB","raoB")
// let sanjayB = new PersonB("sanjayB","rautB")
// amolB.displayName()
// sanjayB.displayName()

// program 3
// Set and Get method

class PersonC {

    setFirstName(fn){
        this.firstName = fn 
    }

    setLastName(ln){
        this.lastName = ln
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName

    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amolC = new PersonC()
console.log(amolC)
amolC.setFirstName("amolC")
amolC.setLastName("raoC")
let a = amolC.getFirstName()
let b = amolC.getLastName()
console.log(a)
console.log(b)

let chinmayC = new PersonC()
chinmayC.setFirstName("chinmayC")
chinmayC.setLastName("deshpandeC")

// set and get keyword










