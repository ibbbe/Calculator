let firstOperand = '0';
let secondOperand = '0';
let operator = null;

function add() {
    return firstOperand + secondOperand;
}

function subtract() {
    return firstOperand - secondOperand;
}

function multiply() {
    return firstOperand * secondOperand;
}

function divide() {
    if (secondOperand === 0) {
    return firstOperand / secondOperand;}
}

function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return add();
            break;
            case '-':
                return subtract();
                break;
                case 'x':
                    return multiply();
                    break;
                    case '/':
                        return divide();
                        break;
    }
}