const display = document.querySelector('.display h3')
const displaySignals = document.querySelector('.display h4')
const digNumbers = document.querySelectorAll('.grayBtn')
const operatorsBtns = document.querySelectorAll('.opBtn')
const resetBtn = document.querySelector('#btnAC')

let result = 0
let lastOperatorButtonPress = ""
let isPercent = false
let isRadical = false


function sum(number) {
    result += number            
    return result
}

function subtraction(number) {
    result = (result == 0) ? number: result - number
    return result
}

function multiplication(number) {
    result = (result == 0) ? number: result * number
    return result
}

function division(number) {
    result = (result == 0) ? number: result / number
    return result
}

function percent(number) {

    let percentNumber
    if (lastOperatorButtonPress == "") {
        result = number/100
    } else {    
        percentNumber = (result * (number / 100))
    }

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

    lastOperatorButtonPress = "%"
    isPercent = false
    return result
}

function radical(number) {

    let radicalNumber
    radicalNumber = Math.sqrt(number)

    switch(lastOperatorButtonPress) {
        case '+':
            result = result + radicalNumber                     
        break
        
        case '-':
            result = result - radicalNumber 
            console.log(result)
        break

        case '*':
            result = result * radicalNumber 
        break

        case '/':
            result = result / radicalNumber 
        break

        case '':
            result = radicalNumber
        break
    }

    lastOperatorButtonPress = "sqrt"
    isRadical = false
    return result
}

function runLastOperation(lastOperatorButtonPress, result, number) {
    
    if (isPercent) {
        result = percent(number)    
    } else if (isRadical) {
        result = radical(number)
    } else {

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
                result = result
            break

            case 'sqrt':
                result = result
            break

            case '':
                result = number
            break
        }
    }

    return result
}

function displayResult() {
    
    console.log(result)                    
    if ((String(result).length) > 8) {
        let fitDisplay = result.toString().substring(0,9)                   

        const decimalIndex = fitDisplay.indexOf('.')
        console.log(decimalIndex)
        if ((decimalIndex + 1) == 9) {
            fitDisplay = Math.round(fitDisplay)
        }
        display.textContent = fitDisplay
                     
    } else {
        console.log("to de k agora")
        display.textContent = result
    }
}


resetBtn.addEventListener('click', resetCalc)
function resetCalc() {
    result = 0
    display.textContent = ""
    displaySignals.textContent = ""
    lastOperatorButtonPress = ""
}

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
                displaySignals.textContent = ""

                result = runLastOperation(lastOperatorButtonPress, result, number)               
                lastOperatorButtonPress = "+" 

                display.textContent = ""
            break
            
            case '-':
                number = Number(display.textContent)
                displaySignals.textContent = ""

                result = runLastOperation(lastOperatorButtonPress, result, number)                
                lastOperatorButtonPress = "-"
                
                display.textContent = ""
            break

            case '*':
                number = Number(display.textContent)
                displaySignals.textContent = ""

                result = runLastOperation(lastOperatorButtonPress, result, number)                   
                lastOperatorButtonPress = "*"
            
                display.textContent = ""
            break

            case '/':
                number = Number(display.textContent)
                displaySignals.textContent = ""

                result = runLastOperation(lastOperatorButtonPress, result, number)                
                lastOperatorButtonPress = "/"

                display.textContent = ""
            break
            
            case '%':
                number = Number(display.textContent)
                isPercent = true
                displaySignals.textContent = "%"

                result = runLastOperation(lastOperatorButtonPress, result, number)                                

                display.textContent = ""
            break

            case 'sqrt':
                number = Number(display.textContent)
                isRadical = true 
                displaySignals.textContent = "sqrt"

                result = runLastOperation(lastOperatorButtonPress, result, number)                                
                lastOperatorButtonPress = "sqrt"

                display.textContent = ""
            break

            case '=':
                number = Number(display.textContent)

                result = runLastOperation(lastOperatorButtonPress, result, number)   
                lastOperatorButtonPress = ""             

                displayResult()                
            break        
        }
    }

    opBtn.addEventListener('click', operations)    
})


/* keyboard inputs */

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
    updateDisplayKeyBoard(event.key)

    if ((event.key == "+") || (event.key == "-") || (event.key == "*") || (event.key == "/") || (event.key == "Enter") || (event.key == "%")) {
        operationsKeyBoard(event.key)
    }

    if ((event.key == "Delete") || (event.key == "Backspace")) {
        resetCalc()
    }
}

function updateDisplayKeyBoard(digNumber) {
    const isZero = (display.textContent == 0)
    const isEmpty = (display.textContent == "")

    const isNotANumber = isNaN(digNumber)
    
    if ((isNotANumber == false) || (digNumber == '.')) {
        if ((isZero) || (isEmpty)) {
            display.textContent = digNumber
        } else if (display.textContent.length < 8) {           
            display.textContent = display.textContent + digNumber
        }
    }
}

function operationsKeyBoard(signalOfOperation) {
    const operation = signalOfOperation               
    switch (operation) {
        case '+':
            number = Number(display.textContent)
            displaySignals.textContent = ""

            result = runLastOperation(lastOperatorButtonPress, result, number)               
            lastOperatorButtonPress = "+" 

            display.textContent = ""
        break
        
        case '-':
            number = Number(display.textContent)
            displaySignals.textContent = ""

            result = runLastOperation(lastOperatorButtonPress, result, number)                
            lastOperatorButtonPress = "-"
            
            display.textContent = ""
        break

        case '*':
            number = Number(display.textContent)
            displaySignals.textContent = ""

            result = runLastOperation(lastOperatorButtonPress, result, number)                   
            lastOperatorButtonPress = "*"
        
            display.textContent = ""
        break

        case '/':
            number = Number(display.textContent)
            displaySignals.textContent = ""

            result = runLastOperation(lastOperatorButtonPress, result, number)                
            lastOperatorButtonPress = "/"

            display.textContent = ""
        break
        
        case '%':
            number = Number(display.textContent)
            isPercent = true
            displaySignals.textContent = "%"

            result = runLastOperation(lastOperatorButtonPress, result, number)                                

            display.textContent = ""
        break

        case 'sqrt':
            number = Number(display.textContent)
            isRadical = true 
            displaySignals.textContent = "sqrt"

            result = runLastOperation(lastOperatorButtonPress, result, number)                                
            lastOperatorButtonPress = "sqrt"

            display.textContent = ""
        break

        case 'Enter':
            number = Number(display.textContent)

            result = runLastOperation(lastOperatorButtonPress, result, number)   
            lastOperatorButtonPress = ""             

            displayResult()                 
        break        
    }
}


const equalBtn = document.querySelector('#btnEqual')
const radicalBtn = document.querySelector('#btnRadical')
const percentBtn = document.querySelector('#btnPercent')

radicalBtn.addEventListener('click', equalFocus)
percentBtn.addEventListener('click', equalFocus)

function equalFocus() {
    equalBtn.focus()
}