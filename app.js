let num1 = ""
let num2 = ""
let operator = ""
let input = "0"

const output = document.querySelector(".output")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const numbers = document.querySelectorAll(".number")
const equals = document.querySelector(".equals")

clearBtn.addEventListener("click", clear)
equals.addEventListener("click", equate)
operators.forEach(o => o.addEventListener("click", setOperation))
numbers.forEach(n => n.addEventListener("click", setNumber))

function setNumber(){
    let numStr = this.innerHTML
    if(input === "0"){
        input = numStr
    }else{
       if(numStr === "."){
           if(!input.includes(".")){
               input += numStr
           }
       }else{
           input += numStr
       }
    }
    displayOutput()
}

function setOperation(){
    num2 = input
    num1 = operate(operator, num1, num2)
    operator = this.innerHTML
    input = ""
    output.innerHTML = num1
}

function equate(){
    num2 = input
    if (num2 === "0") {
        alert("Can't divide by 0")
        num1 = "0"
        num2 = "0"
        input = "0" 
        return
    }
    input = operate(operator, num1, num2)
    num1 = "0"
    displayOutput()
}

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
    console.log(a + " " + b)
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){    
    return a / b
}

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    switch (operator){
        case "+":
         return add(a, b)
        case "-":
         return subtract(a, b)
        case "x":
         return multiply(a, b)
        case "/":   
         return divide(a, b) 
        default:
         return add(a, b)     
    }
}

