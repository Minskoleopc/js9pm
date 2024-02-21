let numbers = [1,2,3,4,5,6,7,8,9,10]
//[2,4,6,8,10,12,14,16,18,20]

let q1  = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q1)

// program 2
let marks = [33,44,22,33,44,55,66,77]
let e2 = marks.filter(function(el,index,arr){
    return el > 30
})
console.log(e2)

// program 3
let nums = [11,22,33]
let e3 = nums.reduce(function(acc,el,index,arr){
    return el + acc 
},0)
console.log(e3)

// program 4
let cities = ["pune","mumbai","bangalore","kolkata"]
let e4 = cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(e4)

// program 5
//           0  1   2  3  4  5  6  7
let numbC = [66,77,88,44,55,66,77,88]
let e5 = numbC.filter(function(el,index,arr){
    return el > 70
})
console.log(e5)

let e6 = numbC.find(function(el,index,arr){
    return el > 70
})
console.log(e6)

// program 6
let e7 = numbC.findIndex(function(el,index,arr){
    return el > 70
})
console.log(e7)

// program 7
let numc = [66,77,33,44,55,66,77,88,3]
let e8 = numc.every(function(el,index,arr){
    return el > 10
})
console.log(e8)

// program 8
numc = [66,77,33,44,55,66,77,88,3]
let e9 = numc.some(function(el,index,arr){
    return el > 100
})
console.log(e9)

//filter()
// map()
// reduce()
// find()
// findIndex()
// some()
// every()
// forEach()

//             0    1    2    3    4  
let state  = ["MH","RJ","UP","MP","AP"]
//             -5   -4   -3   -2   -1

//state.slice(startIndex,endIndex(not included))
let e11  =  state.slice(1)
console.log(state.slice(-4))
console.log(state.slice(1,-1))
console.log(state.slice(1,4))
console.log(state.slice(-5,4))
console.log(state.slice(4,1))






