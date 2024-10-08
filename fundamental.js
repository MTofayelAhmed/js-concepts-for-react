1; // how to declare variable
// let and const use case

// 2. conditions <, > , === , !== , <=, >=
// multiple condition && or  ||

// condition example

const fatherName = "Arnold";
let season = "winter";
if (fatherName === "arnold" || season === "winter") {
} else if (fatherName === "Arnold") {
} else {
}

// 3. array example
// array declare, index, length, push concepts
const numbers = [23, 22, 25, 29];
numbers[0] = 12;

// for loop example

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function

function addNumbers(num1, num2) {
  const add = num1 + num2;
  return add;
}

const output = addNumbers(1, 2)


// 6. object declaration 

const student = {
    name: "John", 
    age: 25,
    grade: "A"
}

// 3 ways to access property 
console.log(student.name)
// console.log(student["age"]) access by property string 

const myVariable = "age"
// console.log(student[myVariable]) access by property name in a variable
