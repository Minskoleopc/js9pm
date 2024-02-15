

//  ------------------------------------------------------

// for(intilialization ; condition ; increment/decrement){
//statements
//}
// break statement with for 
// continue  statement with  while



// while loop

// intialization 
// while(condition){
// statements 
// increment / decrement
//}


let i1 = 1
while (i1 <= 3) {
    console.log("hello") //"hello" "hello" "hello"
    i1 = i1 + 1 // 2 // 3 // 4
}


let i2 = 1
while (i2 <= 5) {
    console.log(i2)
    i2 = i2 + 1
}

let i3 = 5
while (i3 >= 1) {
    console.log(i3) // 5 // 4 // 3 // 2 // 1
    i3 = i3 - 1 // 4 // 3 // 2 // 1 // 0
}

let i4 = 2
while (i4 <= 20) {
    console.log(i4)
    i4 = i4 + 2
}

let i5 = 50
while (i5 >= 5) {
    console.log(i5)
    i5 = i5 - 5
}

let i6 = 30
while (i6 >= 3) {
    console.log(i6)
    i6 = i6 - 3
}


let i7 = 1
while (i7 <= 5) {
    console.log(i7) // 1 // 2
    if (i7 == 2) {
        break
    }
    i7 = i7 + 1 // 2
}


let i8 = 1
while (i8 <= 5) {
    if (i8 == 2) {
        break
    }
    console.log(i8) // 1
    i8 = i8 + 1 // 2
   
}

let i9 = 1
while(i9 <= 5){
    if(i9 == 3){
        i9 ++ // 4
        continue
    }
    console.log(i9) //1 // 2 //4 // 5
    i9 = i9 + 1 // 2 // 3 // 5 // 6
    
}



















































