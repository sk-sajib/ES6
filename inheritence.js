
class Parents {
    constructor(){
        this.fatherName = 'Ali Akbar'
    }
}

class Child extends Parents {

    constructor(name) {
        super ()
        this.name = name
    }

    getFullName() {
        return this.name + '  ' + this.fatherName
    }
}

const baby = new Child('John wick')
const baby2 = new Child('Sajib Khan')
console.log(baby2.getFullName())