
// push()
// action 
// return type 

let names = ["chinmay","sham","ram","satish"]
let q1 = names.push("sarika")
console.log(q1)
console.log(q1)
// unshift()
let q2 = names.unshift('poorva')
console.log(q2)
console.log(names)
// pop()
let fruits = ["apple","mango","banana","grapes"]
let q3 = fruits.pop()
console.log(q3)
console.log(fruits)
// shift()
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

// indexOf()
let animals  =["tiger","lion","bear","cat"]
let q5  = animals.indexOf('lion')
console.log(q5)
let q6  = animals.indexOf('Lion')
console.log(q6)

// includes()
let city = ["banglore","kolkata","chennai","nagpur"]
let q7 = city.includes('Chennai')
console.log(q7)

// reverser()
let q8 = city.reverse()
console.log(city)
console.log(q8)
// at()
//               0         1           2           3
let country = ["india","pakistan","bangladesh","srilanka"]
let q9 = country.at(2)
console.log(q9)

// concat()

let a = [11,22,33]
let b = [44,55,66]

let q10 =  a.concat(b)
console.log(q10)
console.log(a)
console.log(b)

// join()
let info  = ["chinmay","deshpande",7709192441]
let q11 = info.join('-')
let q12 = info.join('@')
console.log(q11)
console.log(q12)


// ------------------------------------->

//                 0     1    2   3
let birthYear  = [1989,1990,1991,1992]
let ages = [] 

// [2023 -1989,2023 -1990,2023 -1991 , 2023 -1992]
// [35,34,33,32]

for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    let x = 2024 - birthYear[i]
    ages.push(x)
}
console.log(ages)


// program 2
//           0  1   2  3  4  5 6
let marks = [11,44,66,88,33,44,55]
let above50 = []
// [66,88,55]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 50){
        //console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)

// program3

let numbers = [11,22,33] // 66
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    total = total + numbers[i]
    //       0    +      11   ------>11
    //       11   +      22   ------>33
    //       33   +      33   -------> 66
}
console.log(total)

// program 4
//              0          1         2        3
let cities  =["nagpur","chennai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+cities[i])
}














// map()

// filter()

// forEach()

// reduce()

// every()

// some()

// find()

// findIndex()






