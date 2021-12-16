let num1 = 0
let num2 = 0
let total = 0
let operator = ""
let input = "0"
const output = document.querySelector(".output")

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener("click", () => {
    let numStr = number.innerHTML
    if(input === "0"){
        input = numStr
    }else{
       if(number.innerHTML === "."){
           if(!input.includes(".")){
               input += numStr
           }
       }else{
           input += numStr
       }
    }
    displayOutput()
}))

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", clear)

const operators = document.querySelectorAll(".operator")
operators.forEach(o => o.addEventListener("click", () => {
    num2 = Number(input)
    num1 = operate(operator, num1, num2)
    operator = o.innerHTML
    input = ""
    output.innerHTML = num1.toString()
}))

const equals = document.querySelector(".equals")
equals.addEventListener("click", () => {
    num2 = Number(input)
    input = operate(operator, num1, num2)
    num1 = 0
    displayOutput()
})

function displayOutput(){
    output.innerHTML = input
}

function clear(){
    num1 = 0
    operator = ""
    input = "0"
    output.innerHTML = input
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if (b === 0) {
        output.innerHTML = "Can't divide by 0" 
    }else{
        return a / b
    }
}

function operate(operator, a, b){
    let sum = 0
    switch (operator){
        case "+":
         sum = add(a, b)
         break;
        case "-":
         sum = subtract(a, b)
         break 
        case "x":
         sum = multiply(a, b)
         break 
        case "/":   
         sum = divide(a, b)
         break  
        default:
         sum = add(a, b)  
         break    
    }

    return sum
}

