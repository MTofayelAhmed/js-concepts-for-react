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


let isActive = true ;

const display = ()=> console.log("DisplayUser")
const hide = ()=> console.log("HideUser")
    
// isActive ? display(): hide()

// if the left side is true then the right sight will be executed 
isActive && display()

// use || if the left side is false then the right side will be executed 
isActive || hide()
    // or operator
console.log(10 || 20) // 10
console.log(0 || 20) // 20
console.log(undefined || 20) // 20
console.log(null || 20) // 20


// toggle boolean concept
isActive = !isActive