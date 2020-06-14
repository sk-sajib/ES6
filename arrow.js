
// function doubleIt (num){
//     return num * 2
// }


// const doubleIt = function myFun(num){
//     return num * 2
// }

const doubleIt = num => num * 2

const add = (x,y) => x + y

const single = () => 10

const doMath = (a,b) => {
    const sum = a + b
    const diff = a - b
    const result = sum * diff
    return result
}

const result = doubleIt(12)
const result1 = add(12, 13)
const result2 = doMath(3,2)
const result3 = single()
console.log(result1)
console.log(result2)
console.log(result3)