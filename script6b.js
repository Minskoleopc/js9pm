// for(intialization ; conditionCheck ; increment/decrement){
//     // statement
// }

// program 1
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// program 2

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

let c = 3
// program 3 
for(let i = 1 ; i <= c ; i++){
    console.log("hello")
    console.log("bye")
}

// program 4
for(let i = 2 ; i <= 20 ; i= i+2){
    console.log(i)
}

// program 5
for(let i = 50 ; i >= 5 ; i = i - 5){
    console.log(i)
}

// program 6 
// break statement with for loop
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}

// program 7
for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i)  // 1 // 2 // 3
    if(i == 3){
        break
    }
}

// program 8
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}

// program 9
// continue with for 

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
   console.log(i) // 1 // 2 // 4 // 5
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    if(i == 3){
        continue
    } 
    console.log(i) // 5 // 4 // 2 // 1
}






