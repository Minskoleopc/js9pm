// map and set 

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:13,
    1:35
}

for(let key in info){
    console.log(typeof key)
}

console.log(10)
console.log('10')

// program 1
let roles  = new Map()
console.log(roles)

roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"customer")
roles.set(4,"employee")
console.log(roles)

console.log(roles.get(1))
console.log(roles.get(2))
console.log(roles.get(3))
console.log(roles.get(4))

// program 2

let skills= ["python","javascript","html","css"]
let info2 = {firstName:"chinmay",lastName:"deshpande"}
let canDrive = true


let names = new Map(
    [
        [skills,4],
        [info2,2],
        [canDrive,"yes"],
        [1,"rollNo"],
        ["fullName","chinmay deshpande"]
    ]

)
console.log(names)
names.get(1)
names.get(skills)

// program 3
let x = names.has(info2)
console.log(x)

// program 4

let roles2 = new Map(
    [

        [1,'admin'],
        [2,'manage'],
        [3,'customer'],
        [4,'employee']
    ]
)

// roles2.clear()
// console.log(roles2)
roles2.forEach(function(val,key){
    console.log(typeof val,typeof key)
})




