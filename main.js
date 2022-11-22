const display = document.querySelector('.display h3')
const digNumbers = document.querySelectorAll('.grayBtn')
const operatorsBtns = document.querySelectorAll('.opBtn')
const resetBtn = document.querySelector('#btnAC')

let result = 0
let lastOperatorButtonPress = ""

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
                result += number                
                lastOperatorButtonPress = "+"
                display.textContent = ""
            break
            
            case '-':
                number = Number(display.textContent)
                result = (result == 0) ? number : result - number
                // result -= number
                console.log(result)
                lastOperatorButtonPress = "-"
                display.textContent = ""
            break

            case '*':
                number = Number(display.textContent)
                result = (result == 0) ? number : result * number
                lastOperatorButtonPress = "*"
                display.textContent = ""
            break

            case '/':
                number = Number(display.textContent)
                result = (result == 0) ? number : result / number
                lastOperatorButtonPress = "/"
                display.textContent = ""
            break

            case '=':
                console.log(lastOperatorButtonPress)
                switch(lastOperatorButtonPress) {
                    case '+':
                        number = Number(display.textContent)
                        result += number                    
                    break
                    
                    case '-':
                        number = Number(display.textContent)
                        result -= number
                    break

                    case '*':
                        number = Number(display.textContent)
                        result = result * number
                    break

                    case '/':
                        number = Number(display.textContent)
                        result = result / number
                    break
                 }     

                display.textContent = result
                result = 0
            break
        }
    }

    opBtn.addEventListener('click', operations)
    
})