let names = ["chinmay","sarika","poorva","ramesh"]
// retrive 
console.log(names[0])
// update 
names[0] = "tanmay"
console.log(names)
// add 
names.push("raj")
names.unshift("raj")
console.log(names)
// delete 
names.pop()
names.shift()
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

// objects 
//              0          1       2   3
let info2 = ["chinmay","deshpande",34,45]

let info3 = {
    // key:value
    // property:value ------> item
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:34,
    age:45
}

console.log(info3)
// object does not stores the value by index ??
// can object stores the duplicate element ??
//console.log(info3[0])

// C - create   R - retrive   U - Update  D - Delete

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:45,
    firstName:"tanmay"
}
console.log(chinmay)

// retrive (dot notation and bracket notation)
console.log(chinmay.firstName)
console.log(chinmay['firstName'])
// update (dot notation and bracket notation)
chinmay.firstName = "ram"
chinmay['lastName'] = "dani"
console.log(chinmay)
// add (dot notation and bracket notation)
chinmay.city = "pune"
chinmay['language'] = "marathi"
console.log(chinmay)
// delete (dot notation and bracket notation)
delete chinmay.firstName
delete chinmay['lastName']

let vehicle = {
    color:"red",
    type:"sedane",
    regNo:123
}

for(let key in vehicle){
    //console.log(key)
    console.log(key , vehicle[key])
}


















