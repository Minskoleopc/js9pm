// inheritance
// program 1
// class Student {

//     firstName = "amol"
//     lastName = "rao"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// amolT = new Teacher()
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.salary)
// amolT.displayName()
// amolT.displaySalary()

// program 2

class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName  = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let chinmayT = new Teacher("amolT","raoT")
console.log(chinmayT.firstName)
console.log(chinmayT.lastName)
console.log(chinmay.salary)
chinmayT.displayName()
chinmayT.displaySalary()


// program 3

class StudentB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherB extends StudentB {
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let ninadB = new TeacherB("ninad","dani",90000)
console.log(ninadB.firstName)
console.log(ninadB.lastName)
console.log(ninadB.salary)

ninadB.displaySalary()
ninadB.displayName()

// program 4

class StudentC {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class TeacherC extends StudentC {

    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }

}

class Professor extends TeacherC {

    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }

    displaySpec(){
        console.log(this.specialization)
    }

}

let pro = new Professor("chinmay","deshpande",34,55)
console.log(pro.firstName)
console.log(pro.lastName)
console.log(pro.salary)
console.log(pro.specialization)
pro.displayName()
pro.displaySalary()
pro.displaySpec()