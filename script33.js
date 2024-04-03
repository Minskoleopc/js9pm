// lexical scope
function additionA(){
    let a = 10
    let b = 5
    function additionB(){
        let x = 8 
        let y = 4
        console.log(a+b+x+y)
        // console.log(s1)
        // console.log(s2)
        function additionC(){
            let s1 = 10
            let s2 = 5
            console.log(a+b+x+y+s1+s2)
        }
        additionC()
    }
    additionB()
}
additionA()

// program 2
function additionC(){
    console.log(9+9)
    console.log("hello")
    return "bye"
    console.log(9+9)
}
let r1  = additionC()
console.log(r1)

// program 3
// function additionD(){
//     return function(){
//         console.log('hello')
//     }
// }
// let e = additionD()
// // let e = function(){
// //     console.log('hello')
// // }
// e()


// program 3
// closures
// function additionR(){
//     let r = 10 
//     let s = 5
//     return function(){
//         console.log(s+r)
//     }
// }
// let a = additionR()
// console.log(a)
// // let a  = function(){
// //     console.log(s+r)
// // }

// a()

// program 4

// function declaration 

function additionF(x,y){
    return x + y
}
let e = additionF(12,3)
console.log(e)

// function expression 

let additionF2 = function(x,y){
    return x + y
}
let e2 = additionF2(12,3)
console.log(e2)

// arrow function 


// let additionF3 = (x,y)=>{
//     return x + y
// }
// let e3 = additionF2(12,3)
// console.log(e3)

let additionF3 = (x,y)=> x + y
let e3 = additionF2(12,3)
console.log(e3)





