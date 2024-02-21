// map()

let birthYear = [1989,1990,1991,1992]
// [35,34,33,32]

let q1 = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(q1)


let numbers = [11,22,33,44,55]
//[21,32,43,54,65]
let q2 = numbers.map(function(el){
    return el + 10
})
console.log(q2)

// filter()
let marks  = [89,22,33,44,55,66]
let q3 = marks.filter(function(el,index,arr){
    return el > 50 && el < 89
})
console.log(q3)

// reduce()
let numbersA = [11,22,33]
let q4 = numbersA.reduce(function(acc,el,index,arr){
    return el + acc // acc ---> 11 ------> acc -----> 33 ------acc ------ 66
},0)
console.log(q4)

// forEach()
let cities = ["pune","mumbai","banglore","kolkata","chennai"]
let q5  = cities.forEach(function(el,index,arr){
    console.log("welcome " + el)
})
console.log(q5)

//----------------------------------------------------------->

// find()
//             0   1  2  3  4  5
let numberB = [22,33,44,55,40,33]
let q6 = numberB.filter(function(el,index,arr){
    return el > 40
})
console.log(q6)

let q7 = numberB.find(function(el,index,arr){
    return el > 40
})
console.log(q7)

// findIndex()
let q8 = numberB.findIndex(function(el,index,arr){
    return el > 40
})
console.log(q8)

// every()

let numbersV = [11,2,33,11,22,33,44,55,66]
let q9 = numbersV.every(function(el,index,arr){
    return el > 10
})
console.log(q9)

// some()
numbersV = [11,2,33,11,22,33,44,55,66]
let q10  = numbersV.some(function(el,index,arr){
    return el > 500
})
console.log(q10)

// slice()
//           0   1   2   3  4    5   6   7   8   9
let nums = [111,222,333,444,555,666,777,888,999,1000]
//          -10 -9  -8  -7  -6   -5 -4  -3  -2    -1
//nums.slice(startIndex, endIndex (not included))
console.log(nums.slice(3))
console.log(nums.slice(3,6))
console.log(nums.slice(-10,6))
console.log(nums.slice(1,-3))
console.log(nums.slice(-3))
console.log(nums.slice(-1,-3))