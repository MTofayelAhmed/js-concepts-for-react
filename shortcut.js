// falsy Value (0, undefined , null , "", false)

// truthy = ("s", 5, true, {}, [])


let myVar = 50
if(!myVar){
    console.log("I am a stupid")
}
else{
console.log("I am a superStar")
}


// ternary operator 
let money = 200
const food = (myVar === 50 && money>100  )? "Food": "Cha-Biscuit";
console.log(food)

//  when you add a empty string with a number , it becames a string 
let num = 52 
console.log(num)
const numStr= num + "";
console.log(numStr)

// str to number 
const input = "560";
const inputNum = +input
console.log(inputNum)


const isActive = true ;

const display = ()=> console.log("DisplayUser")
const hide = ()=> console.log("HideUser")
    
isActive ? display(): hide()