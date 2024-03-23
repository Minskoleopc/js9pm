// map

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:55,
    1:35
}
console.log(info)

for(let key in info){
    console.log(typeof key)
}

let roles = new Map()
roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"customer")
roles.set(4,"teacher")
roles.set(5,"support")
console.log('10')
console.log(10)
console.log(roles)

q = roles.get(1)
q2 = roles.get(2)
q4 = roles.get(3)
q5 = roles.get(4)
q6 = roles.get(5)

// program 2

let mapB = new Map(
    [
        [1,"admin"],
        [2,"customer"],
        [3,"manager"],
        [4,"support"],
        
    ]
)

console.log(mapB)
let names = ["chinmay","sarika"]
let info2 = {firstName:"chinmay",lastName:"deshpande"}

let mapC = new Map([
    [names,"students"],
    [info2,"information"],
    [true,"candrive"],
    [12,"rollNo"]
])
console.log(mapC)


// mapC.clear()
// console.log(mapC)

//console.log(mapC.size)

mapC.get(12)
mapC.set('city',"pune")
let q1 = mapC.has(12)
console.log(q1)
mapC.delete(12)
console.log(mapC)

let mapD = new Map([
    ["MH","Nagpur"],
    ["UP","Kanpur"],
    ["RJ","Jaipur"]
])

mapD.forEach(function(x,y){
    console.log(x,y)
})

for(let key of mapD.keys()){
    console.log(key)
}

for(let x of mapD.values()){
    console.log(x)
}

for(let [k,v] of mapD.entries()){  //["MH","Nagpur"]
    console.log(k,v)
}


console.log(mapC)