/**
 * Math hosche javascript ar akti object owala function
 *
 */

const min = (Math.min(2, 5, 6, 90, 2, -1));
console.log('Minimum Num ->', min)

const max = (Math.max(2, 5, 6, 90, 2, -1));
console.log('Maximum Num ->', max)

const pi = Math.PI
console.log("PI Value ->",pi)
console.log("PI Usable Value ->", pi.toFixed(4))

const absoluteValue = Math.abs(-101);
console.log("Absolute Value ->", absoluteValue)

const roundedValue = Math.round(2.54)
console.log("Rouneded Value ->", roundedValue)

const floorValue = Math.floor(2.54)
console.log("Floor Value ->", floorValue)

const ceilValue = Math.ceil(2.54)
console.log("Ceil Value ->", ceilValue)

// Random is very usable function
const randomValue = Math.random()
console.log("From 0 to 1 value ->", randomValue)

const randomValueRound = Math.round(Math.random())
console.log("From 0 to 1 value ->", randomValueRound)

const randomValueRound20 = Math.round(Math.random()*20)
console.log("From 0 to 20 value ->", randomValueRound20)