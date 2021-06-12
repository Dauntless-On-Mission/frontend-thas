class Calculator {
    constructor(display,output) {
        this.display = display;
        this.output = output;
        this.clear();
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;

            case '*':
                computation = prev * current;
                break;
                
            case '÷':
                computation = prev / current;
                break;

            case '%':
                computation = prev % current;
                break;

            default:
                return
                
        }
        this.currentOperand = computation;
        this.operation =undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let intergerDisplay;
        if(isNaN(intergerDigits)) {
            intergerDigits = '';
        } else {
            intergerDigits = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `$(integerDisplay).$(decimalDigits)`
        } else {
            return intergerDisplay
        }
    } 

    updateDisplay() {
        this.output.innerText = this.currentOperand;
        if(this.operation != null){
        this.display.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.display.innerText = ''
        }
    }

}

const numberbtn = document.querySelectorAll('.numb');
const operbtn = document.querySelectorAll('.operator');
const equalbtn = document.querySelector('.equals');
const clearbtn = document.querySelector('.clear');
const lastEl = document.querySelector('.last-clear');
const display = document.querySelector('.dis');
const  output = document.querySelector('.output');

const calculator = new Calculator(display,output)

numberbtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operbtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalbtn.addEventListener('click',button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearbtn.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})

lastEl.addEventListener('click',button => {
    calculator.delete()
    calculator.updateDisplay()
})