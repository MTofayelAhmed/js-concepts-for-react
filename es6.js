// template string

const student = {
  name: "John",
  age: 25,
  grade: "A",
};
const numbers = [23, 22, 25, 29];
console.log(`my name is ${student.name} and my number is ${numbers[2]}`);

// 2.arrow function
const basic = () => 55;
const addSixtyFive = (number) => number + 65;
const add = (a, b, c) => a + b + c;

const isEven = (x) => x % 2 == 0;
const complexArrow = (a, b, c) => {
  const sum = a + b + c;
  return sum;
};

// 3. spread operator 

const newNumber = [...numbers] ;

numbers.push(99)
numbers.push(99)
numbers.push(99)
console.log(newNumber)
console.log(numbers)


