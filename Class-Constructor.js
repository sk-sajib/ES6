class Student  {
    constructor (sId, sName){
        this.id = sId
        this.name = sName
        this.school = 'kapasia pilot'
    }
}

const student1 = new Student(22, 'sajib')
const student2 = new Student(12, 'khan')
const student3 = new Student(15, 'Jhankar')
console.log(student1, student2,student3)