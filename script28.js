// class Calculator{
//     // addition(x,y){
//     //     console.log(x+y)
//     // }

//     // addition(x,y,z){
//     //     console.log(x+y+z)
//     // }

//     // addition(x,y,z,a){
//     //     console.log(x+y+z+a)
//     // }

//     addition(x,y,z,a){
//         if(x != undefined && y != undefined && z != undefined && a != undefined){
//             console.log(x+y+z+a)
//         }
//         else if(x != undefined && y != undefined && z != undefined){
//             console.log(x+y+z)
//         }
//         else if(x != undefined && y != undefined){
//             console.log(x+y)
//         }

//     }

// }
// let a = new Calculator()
// a.addition(12,13)
// a.addition(12,13,34)
// a.addition(12,13,34,45)

// program 2

class WorldBank {
    save(){
        console.log("I am save from worldBank")
    }
    loan(){
        console.log("I am loan from worldBank")
    }
}

// overriding
class SBI extends WorldBank {
    save(){
        console.log("I am save from sbiBank")
    }
    loan(){
        console.log("I am loan from sbiBank")
    }
}

class PNB extends WorldBank {
    save(){
        console.log("I am save from pnbBank")
    }
    loan(){
        console.log("I am loan from pnbBank")
    }
}

let sbia = new SBI()
sbia.loan()
sbia.save()

let pnb = new PNB()
pnb.loan()
pnb.save()








