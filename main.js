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
        } else {           
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

                    case '':
                        result = sum(number)
                    break
                 }       

                lastOperatorButtonPress = "+" 
                display.textContent = ""
            break
            
            case '-':
                number = Number(display.textContent)

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

                    case '':
                        result = subtraction(number)
                    break
                 } 
                
                lastOperatorButtonPress = "-"
                display.textContent = ""
            break

            case '*':
                number = Number(display.textContent)

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

                    case '':
                        result = multiplication(number)
                    break
                 }                   
            
                lastOperatorButtonPress = "*"
                display.textContent = ""
            break

            case '/':
                number = Number(display.textContent)

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

                    case '':
                        result = division(number)
                    break
                 } 

                lastOperatorButtonPress = "/"
                display.textContent = ""
            break

            case '=':
                number = Number(display.textContent)
                
                console.log(lastOperatorButtonPress)
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
                 }     

                display.textContent = result
                result = 0
            break
        }
    }

    opBtn.addEventListener('click', operations)
    
})