// object literal
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:34
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:35
}
// 100 ----- 400 lines

// Es6 class
// class Person {
//     first_name = "chinmay"
//     last_name = "deshpande"
//     age = 23
//     rollNo = 56

//     display_name(){
//         console.log(this.first_name+this.last_name)
//     }
// }

// let amolA = new Person()
// let chinmayA = new Person()


// console.log(amolA.first_name)
// console.log(amolA.last_name)
// console.log(amolA.age)
// console.log(amolA.rollNo)
// console.log(amolA)
// amolA.display_name()
// console.log(chinmayA)

// amolA.first_name ="amol"
// amolA.last_name ="rao"
// amolA.age = 23
// amolA.rollNo = 55
// console.log(amolA)

// program 3
// Es6 class with constuctor
class Person {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.rollNo =rollNo 
        this.age = age

    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amolC = new Person("amolR","RaoR",35,6)
let chinmayC = new Person("chinmayC","DeshpandeD",32,34)
chinmayC.city = "pune"
console.log(chinmayC)







// for(let key in amolA){
//     console.log(key,amolA[key])
// }

// for(let key in Object.keys(amolA)){
//     console.log(key)
// }

// for(let val in Object.values(amolA)){
//     console.log(val)
// }

// for(let [k,v] in Object.entries(amolA)){
//     console.log(k,v)
// }




