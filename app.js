let a = 0
let b = 0
let operator = ""
let value = "0"
const output = document.querySelector(".output")

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener("click", () => {
    if(number.innerHTML === "."){
        if(!value.includes(".")){
            value += number.innerHTML
        }
    }else{
        value += number.innerHTML 
        value = Number(value).toString()
    }
    displayOutput()
}))

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", clear)

const operators = document.querySelectorAll(".operator")
operators.forEach(o => o.addEventListener("click", () => {
    b = Number(value)
    a = operate(operator, a, b)
    operator = o.innerHTML
    value = ""
    output.innerHTML = a.toString()
}))

const equals = document.querySelector(".equals")
equals.addEventListener("click", () => {
    b = Number(value)
    value = operate(operator, a, b)
    a = 0
    displayOutput()
})

function displayOutput(){
    output.innerHTML = value
}

function clear(){
    a = 0
    operator = ""
    value = "0"
    output.innerHTML = value
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

