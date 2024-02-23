// slice()
//               0          1       2        3       4
let names  = ["chinmay","mayuri","vinod","akshay","sameer"]

//              -5         -4      -3       -2         -1
//names.slice(startIndex,endIndex(not included))

let r1 = names.slice(2,5)
let r2 = names.slice(1)
let r3 = names.slice(1,3)
//console.log(r2)
//console.log(r1)
//console.log(r3)
// console.log(1,-1)
// console.log(-5,3)
//console.log(names.slice(-1,0))

// splice()
// Gym ----
// action --- excercise
// return --- health 

let namee = ["ram","sham","satish","ram","ramesh"]
let q1 = namee.pop()
console.log(q1)

let q2 = namee.shift()
console.log(q2)
console.log(namee)

//        0      1       2       3      4
names = ["ram","sham","satish","ram","ramesh"]

//names.splice(startIndex,numberOfElementtoBeDelete)
// let e2 = names.splice(1,1)
// // console.log(names)
// // console.log(e2)
// console.log(names)
// console.log(e2)
// names.splice(2,1,"bharat")
// console.log(names)

// reverse()
// let a = [11,22,33,44]
// a.reverse()
// console.log(a)

// concat()

let a = [11,22,33]
let b = [44,55,66]
let c = a.concat(b)
console.log(c)


// fill()
//        0  1  2  3  4  5
let a1 = [11,22,33,44,55,66]
let a2 = a1.fill('-',1,5)
console.log(a2)

// flat()
//                   0                     1                  2    
//               0        1        0          1         0           1       
let states =[["nagpur","mumbai"],["jaipur","udaipur"],["bhopal","indore"]]
console.log(states[0][1])
console.log(states[1][1])
e3 = states.flat()
console.log(e3)

// sort()
let country = ["india","srilanka","pakistan"]
country.sort()
console.log(country)

// join()
let info = ["chinmay","deshpande",7709192441]
console.log(info.length)
e2 = info.join('-')
console.log(e2)
console.log(typeof e2)
