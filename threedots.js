const ages = [13, 12, 19]
const ages1 = [16, 15, 18]
const ages2 = [22,28,26,29]
//const allages = ages.concat(ages1).concat([6]).concat(ages2)
const allages2 = [...ages, ...ages1, 5, ...ages2]
//console.log(allages2)


const business = 650
const minister = 450
const mp = 350
const totalTaka = [650,450,350]
//const maximum = Math.max(business,minister,mp)
const maximum = Math.max(...totalTaka)
//console.log(maximum)

const num1 = 650
const num2 = 450
const num3 = 350
const total = [num1,num2,num3]
const max = Math.max(...total)
console.log(max)