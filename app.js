let operand = '0';
let result = 0;
let operator = null;
const display = document.querySelector('.display');

function refreshDisplay() {
    display.textContent = operand;
}

function startCalculator() {
    document.querySelector('.calculator-buttons')
        .addEventListener('click', (e) => { buttonClick(e.target.textContent) });
}

function buttonClick(input) {
    if (isNaN(parseInt(input))) {
        handleNaN(input);
    } else {
        handleNumber(input);
    }
    refreshDisplay();
}

function handleNumber(number) {
    if (operand === '0') {
        operand = number;
    } else {
        operand += number;
    }
}

function handleMath(value) {
    if (operand === '0') {
        return;
    }
    const intOperand = parseInt(operand);
    if (result === 0) {
        result = intOperand;
    } else {
        operate(intOperand);
    }
    operator = value;
    operand = '0';
}

function operate(intOperand) {
    if (operator === '+') {
        result += intOperand;
    } else if (operator === '-') {
        result -= intOperand;
    } else if (operator === 'x') {
        result *= intOperand;
    } else if (operator === '/') {
        result /= intOperand;
    }
}

function handleNaN(nan) {
    switch (nan) {
        case 'C':
            operand = '0';
            break;
        case 'Del':
            if (operand.length === 1) {
                operand = '0';
            } else {
                operand = operand.slice(0, -1);
            }
            break;
        case '=':
            if (operator === null) {
                return;
            }
            operate(parseInt(operand));
            operator = null;
            operand = '' + result;
            result = 0;
            break;
        case '+':
        case '-':
        case '/':
        case 'x':
            handleMath(nan);
            break;
    }
}

startCalculator();