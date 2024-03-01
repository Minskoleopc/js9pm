// string 

let first_name = "chinmay"
console.log(first_name)

let last_name = 'deshpande'
console.log(last_name)

let middle_name = `shirish`
console.log(middle_name)


let fn = "chinmay"
let ln  = "deshpande"

//My firstName is chinmay and my lastName is deshpande
console.log("My firstName is "+fn+" and my lastName is "+ln)

// program 2 string interpolation
console.log(`My firstName is ${fn} and my lastName is ${ln}`)

// program 3

// string + number  ----> string 
// number + string  ----> string 
// string + string  ----> string
// number + number  ----> number

let a = 10
let b = 15
let c = "hello"

console.log(a + b + c)
// number + number + string
// 25 + "hello" 
// 25hello

console.log(c+a+b)
// string + number + number
    //"hello10" + 20
    // "hello1015"

console.log(b+c+a)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)


// string ------> object ------ properties and methods 

let city = "pune"
console.log(city)
let e = city[0]
console.log(e)

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// program 2
// string -----> object -----> properties and methods 
// action and return type

let city3 = "chandrapur"
// 0    1    2    3    4    5    6   7   8    9
// c    h    a    n    d    r    a   p   u    r
console.log(city3.length)
for(let i = 0 ; i < 10 ; i++){
    //console.log(i)
    console.log(city3[i])
}

for(let i = city3.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city3[i])
}


// program 3
let city4 = "nagpur"
let i1  = 0

while(i1 < city4.length){
    //console.log(i1)
    console.log(city4[i1])
    i1 = i1 + 1
}

let i2 = city4.length - 1
while(i2 >= 0){
    console.log(city4[i2])
    i2 = i2 - 1
}









































