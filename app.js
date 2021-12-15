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
        //do something
    } else{
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
        case "*":
         sum = multiply(a, b)
         break 
        case "/":
         sum = divide(a, b)
         break    
    }

    return sum
}

