// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let vijeet = {
//     firstName:"vijeet",
//     lastName:"dani"
// }

// let displayName2 = chinmay.displayName

// // let displayName2  = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// displayName2()

// // bind

// let q = displayName2.bind(vijeet)
// // let q  = function(){
// //     console.log(vijeet.firstName + vijeet.lastName)
// // }

// q()


// program 2


// let shivani = {
//     firstName:"shivani",
//     lastName:"hedau"
// }

// let hrushali = {
//     firstName:"hrushali",
//     lastName:"patil"

// }
// let vedant = {
//     firstName:"vedant",
//     lastName:"gaikwad"
// }

// let displayName3 = function(){
//     console.log(this.firstName + this.lastName)
// }

// displayName3.bind(shivani)()
// displayName3.bind(hrushali)()
// displayName3.bind(vedant)()


// program 2


let shivani = {
    firstName:"shivani",
    lastName:"hedau"
}

let hrushali = {
    firstName:"hrushali",
    lastName:"patil"

}
let vedant = {
    firstName:"vedant",
    lastName:"gaikwad"
}

let displayName4 = function(a){
    console.log(this.firstName + this.lastName)
    console.log(greet)
}
displayName4.call(shivani,"hello")
displayName4.call(hrushali,"hello")
displayName4.call(vedant,"hello")


// apply
displayName4.apply(shivani,["bye","hi","bye","good bye","tc"])











// let a = chinmay.displayName

// // let a = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// a()
// chinmay.a()
//vijeet.a()