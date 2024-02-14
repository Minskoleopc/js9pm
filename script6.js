// for loop 

// for(intialization ; conditionCheck ; increment/decrement){
//     // statements 
// }

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

for (let i = 3; i >= 1; i--) { // 2 // 1 // 0
    console.log(i) // 3 // 2 //1
}

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

// for loop with break  statement 
// program 1
for (let i = 1; i <= 5; i++) {  // 2 // 3
    console.log(i) // 1  // 2 // 3
    if (i == 3) {
        break
    }
}

// program 2
for (let i = 5; i >= 1; i--) { // 4 // 3
    if (i == 3) {
        break
    }
    console.log(i) // 5 // 4
}


// program 3
for (let i = 2; i <= 20; i = i + 2) { // 4 // 6 // 8 // 10
    if (i == 10) {
        break
    }
    console.log(i) // 2 // 4 // 6 // 8
}


// program 4
// continue statement with for loop
for (let i = 1; i <= 5; i++) { // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5
}

// program 5 
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    if(i == 3){
        continue
    }
    console.log(i)// 5 // 4 // 2 // 1
}





