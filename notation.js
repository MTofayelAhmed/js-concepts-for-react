// dot notation vs bracket notation

const person = {
  name: "John",
  age: 24,
  address: "Cumilla",
  25: "Winter",
};

// in dot notation we access the object parameter with a dot . but  we can also use bracket notation?
// if the perameter is in number we dont have to use string 
const personAge = person["age"];
const season = person[25]
console.log(season);
