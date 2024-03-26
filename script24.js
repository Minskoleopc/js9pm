// let amol = {
//     firstName:"amol",
//     lastName :"rao",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// program 2

// class Person {
//     firstName = "chinmay"
//     lastName = "deshpande"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amolA = new Person()
// let chinmayA = new Person()
// console.log(amolA.firstName)
// console.log(amolA.lastName)
// amolA.displayName()

// console.log(chinmayA.firstName)
// console.log(chinmayA.lastName)
// chinmayA.displayName()

// console.log(amolA)
// console.log(chinmayA)

// amolA.firstName = "amolA"
// amolA['lastName'] = "raoA"
// console.log(amolA)

// program 3

// class PersonB {

//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let shivani = new PersonB("shivani","hedau")
// let ankit = new PersonB("ankit","hedau")
// shivani.city = "pune"

// console.log(shivani.firstName)
// console.log(shivani.lastName)

// console.log(ankit.firstName)
// console.log(ankit.lastName)
// console.log(shivani.city)

// program 3


// class PersonC {

//     setFirstName(fn){
//         this.firstName  = fn 
//     }
//     setLastName(ln){
//         this.lastName  = ln
//     }

//     getLastName(){
//         return this.lastName
//     }
//     getFirstName(){
//         return this.firstName
//     }

// }
// let chinmayC = new PersonC()
// console.log(chinmayC)
// chinmayC.setFirstName("chinmay")
// chinmayC.setLastName("deshpande")
// console.log(chinmayC)

// let a = chinmayC.getFirstName()
// console.log(a)

// program 2

// let info = {
//     full_name:"ninad dani",
//     age:34
// }
// info.age = 67
// info.city  = "pune"

// set and get keyword
class  personD {

    set fn(fn){
        this.firstName  = fn
    }
    get fn(){
        return this.firstName
    }

    set ln(ln){
        this.lastName  = ln
    }
    get ln(){
        return this.lastName
    }

}
// setting class fields as properties 
let shiva = new personD()
shiva.fn = "shivani"
console.log(shiva.fn)
console.log(shiva)

shiva.ln = "hedau"
console.log(shiva.ln)
console.log(shiva)
















