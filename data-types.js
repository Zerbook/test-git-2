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

const userAge = 35
if (userAge >= 18) {
    console.log('Вы совершеннолетний')
} else {
    console.log('Вы НЕ совершеннолетний')
}
