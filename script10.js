//                0     1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [35,34,33,32]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
   //console.log(2024 - birthYear[i])
   let x = 2024 - birthYear[i]
   ages.push(x)
}
console.log(ages)

//            0     1   2    3   
birthYear = [1989,1990,1991,1992]
let e2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(e2)

let numbers = [11,22,33,44,55,66,77,88,99]
// [12,23,34,45,56,67,78,89,100]
let e3 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(e3)


// program 2
//           0  1  2  3   4  5  6  7 8
let marks = [33,44,55,33,44,55,66,77,88]
let above50 = []
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 50){
        //console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)

// program 2
let e5 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(e5)

let transactions = [11,22,33,44,-77,88,99,67,-89]

let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let  withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)


// program 3

let numbersA = [11,22,33]
let total = 0 

for(let i = 0 ; i < numbersA.length ; i++){
    // console.log(i)
    // console.log(numbersA[i])

    total = total + numbersA[i]
    //        0   +      11   ------>//11
    //       11   +      22   ------> //33
    //       33   +      33   ------> // 66 
}
console.log(total)
let e7 = numbersA.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(e7)













