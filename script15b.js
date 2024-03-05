let first_name = "chinmay"
console.log(first_name)
console.log(typeof first_name)

let city = "pune"

//  0  1   2   3
//  p  u   n   e

let a = city.length
console.log(a)

// program 2
// Method --- action 
// Return --- type

let city2  = "pune"
let s1 = city2.toUpperCase()
console.log(s1)

let city3 = "Nagpur"
console.log(city3)
let s2 = city3.toLowerCase()
console.log(s2)

// method chaining 
let s3 = "hello".toUpperCase().toLowerCase().length
//let s4 = "hello".toUpperCase().toLowerCase().length.toLowerCase()
console.log(s3)
//console.log(s4)

// program 2 

let city4 = "jaipur"
let s5 = city4.startsWith("j")
let s6 = city4.startsWith("ja")
let s7 = city4.startsWith("jA")
console.log(s7)

let city5 = "goa"
let s8 = city5.endsWith('a')
let s9 = city5.endsWith('oa')
let s10 = city5.endsWith('Oa')

console.log(s8)
console.log(s9)
console.log(s10)

// program 4
let city6 = "wardha"
// 0   1   2  3  4   5
// w   a   r  d  h   a
let s11 =city6.indexOf("a")
let s12 =city6.indexOf("A")
let s13 =city6.includes("a")
let s14 =city6.includes("ar")
console.log(s11)
console.log(s12)
console.log(s13)
console.log(s13)
console.log(s14)


// program 6
let city7 = " goa "
console.log(city7.length)
console.log(city7.trimStart().length)
console.log(city7.trimEnd().length)
console.log(city7.trim().length)



























