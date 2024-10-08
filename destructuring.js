const numbers =[1,2,3, 4]

const [a,b,c,d]= numbers;

function makeArray (number1, number2){
    const newArray = [number1, number2]
    return newArray
}


const [first, second]= makeArray(20,30)
console.log(first)


const student = {
    name: "John", 
    age: 25,
    grade: "A",
    movies: ["1", "3", "4"]
}


const [firstMovie, secondMovie, ThirdMovie]= student.movies
console.log(firstMovie)


// object destructuring
const person = {
    name: "a",
    age: "b", 
    grade: 4, 
    movies: {
        first:'firstMovie',
        second: "secondMovie",
        third: {
        title: "ThirdMovie",
        direction: "Salam"
        },
    },
    language: ["HTML", "CSS", "JS"]
}


const {title, direction}= person.movies.third;

console.log(title, direction)
