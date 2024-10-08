// 1. JSON
const student = {
    name: "John", 
    age: 25,
    grade: "A"
}

const studentJSON = JSON.stringify(student)
const studentObject = JSON.parse(studentJSON)
console.log(studentJSON)
console.log(studentObject)


// fetch

// fetch("url")
// .then(res => res.json())
// .then(data => console.log(data))

// how to make a array of keys of a object 
const studentKeys = Object.keys(student)
console.log(studentKeys)

// values(how to get an array of values from an object)

const studentValues = Object.values(student)
console.log(studentValues)

// forEach and map

// when we want to do something with the each element of 
// an array but we do not want to return anything we use forEach

const numbers = [20, 12, 23, 34, 45, 56]
numbers.forEach((num)=> console.log(num))

const numberAdd = numbers.map((nums)=> nums + 2)
console.log(numberAdd)


// for of in array like object 
// loop on object using for in 

// How to add new products in the existing array of object?

const products = [
    {name: "camera", price: 2000, brand: "HP", color: "grey"},
    {name: "phone", price: 2000, brand: "Apple", color: "grey"},
    {name: "watch", price: 2000, brand: "apple", color: "grey"},
    {name: "laptop", price: 2000, brand: "HP", color: "grey"}

]
const newItem = {name: "webCam", price: 2000, brand: "F", color: "red"}
const newProduct = [...products, newItem]


