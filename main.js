const display = document.querySelector('.display h3')
const digNumbers = document.querySelectorAll('.grayBtn')
const operatorsBtns = document.querySelectorAll('.opBtn')
const resetBtn = document.querySelector('#btnAC')

let result = 0
let lastOperatorButtonPress = ""


function sum(number) {
    result += number
    lastOperatorButtonPress = "+"
    return result
}

function subtraction(number) {
    result = (result == 0) ? number: result - number
    lastOperatorButtonPress = "-"
    return result
}

function multiplication(number) {
    result = (result == 0) ? number: result * number
    lastOperatorButtonPress = "*"
    return result
}

function division(number) {
    result = (result == 0) ? number: result / number
    lastOperatorButtonPress = "/"
    return result
}

function percent(number) {
    
    console.log(result)
    console.log(number)
    
    let percentNumber = (result * (number / 100))
    console.log(percentNumber)
    switch(lastOperatorButtonPress) {
    case '+':
        result = result + percentNumber                     
    break
    
    case '-':
        result = result - percentNumber 
    break

    case '*':
        result = result * percentNumber 
    break

    case '/':
        result = result / percentNumber 
    break
    }
    
    lastOperatorButtonPress = "/"
    return result
}

function runLastOperation(lastOperatorButtonPress, result, number) {
    
    switch(lastOperatorButtonPress) {
        case '+':
            result = sum(number)                     
        break
        
        case '-':
            result = subtraction(number)
        break

        case '*':
            result = multiplication(number)
        break

        case '/':
            result = division(number)
        break

        case '%':
            result = percent(number)
        break

        case '':
            result = number
        break
     }

    //  console.log(result)
     return result
}

function displayResult() {
    if ((String(result).length) > 7) {
                    
        let fitDisplay = result.toString().substring(0,9)                   

        const decimalIndex = fitDisplay.indexOf('.')
        console.log(decimalIndex)
        if ((decimalIndex + 1) == 9) {
            fitDisplay = Math.round(fitDisplay)
        }

        display.textContent = fitDisplay
                     
    } else {
        display.textContent = result
    }

}


resetBtn.addEventListener('click', () => {
    result = 0
    display.textContent = ""
    lastOperatorButtonPress = ""
})


digNumbers.forEach(function(digNumber) {
    digNumber.addEventListener('click', updateDisplay)

    function updateDisplay() {
        const isZero = (display.textContent == 0)
        const isEmpty = (display.textContent == "")
    
        if ((isZero) || (isEmpty)) {
            display.textContent = digNumber.textContent
        } else if (display.textContent.length < 8) {           
            display.textContent = display.textContent + digNumber.textContent
        }
    }
})

operatorsBtns.forEach(function(opBtn) {    
    const operations = () => {
        const operation = opBtn.value                
        
        switch (operation) {
            case '+':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)               
                lastOperatorButtonPress = "+" 

                display.textContent = ""
            break
            
            case '-':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)                
                lastOperatorButtonPress = "-"
                
                display.textContent = ""
            break

            case '*':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)                   
                lastOperatorButtonPress = "*"
            
                display.textContent = ""
            break

            case '/':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)                
                lastOperatorButtonPress = "/"

                display.textContent = ""
            break
            
            case '%':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)                
                lastOperatorButtonPress = "%"

                display.textContent = ""
            break

            case '=':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)                

                displayResult()
                
            break        
        }
    }

    opBtn.addEventListener('click', operations)
    
})