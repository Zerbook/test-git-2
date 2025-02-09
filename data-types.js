// String
// Number
// Boolean
// Null
// Undefined
// Object
// Symbol
// BigInt

const nameAuto = 'BMW'
const horsePower = 150
const isPetrol = true
const journal = null
const carOwner = undefined
const auto = {
    nameAuto: 'BMW',
    isPetrol: true,
}
const vin = Symbol('WWN547')
const numberBig = BigInt(20)

console.log('nameAuto', nameAuto, typeof nameAuto)
console.log('horsePower', horsePower, typeof horsePower)
console.log('isPetrol', isPetrol, typeof isPetrol)
console.log('journal', journal, typeof journal)
console.log('carOwner', carOwner, typeof carOwner)
console.log('auto', auto, typeof auto)
console.log('vin', vin, typeof vin)
console.log('numberBig', numberBig, typeof numberBig)