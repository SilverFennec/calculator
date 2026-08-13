function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
      
    default:
      return 'Enter a valid operator';
  }
}

let firstNum = '';
let secondNum = '';
let operator = '';
let currentNum = 'firstNum'
let result = '';

const display = document.querySelector('.displayInput');
const numpad = document.querySelector('.numpad');
const operators = document.querySelector('.operators');
const equalsButton = document.querySelector('.equalsButton')
const clearButton = document.querySelector('.clearButton');

numpad.addEventListener('click', (event) => {
  if (currentNum == 'firstNum') {
    firstNum += event.target.value;
    console.log(firstNum);
    display.value = firstNum;
  }
  else if (currentNum == 'secondNum') {
    secondNum += event.target.value;
    console.log(secondNum);
    display.value = secondNum;
  }
})

clearButton.addEventListener('click', (event) => {
  currentNum = 'firstNum';
  firstNum = '';
  secondNum = '';
  result = '';
  display.value = '';
})

operators.addEventListener('click', (event) => {
  if (secondNum == '') {
    operator = event.target.value;
    currentNum = 'secondNum';
  }
  else if (secondNum == '0' && event.target.value == '/') {
    secondNum = '';
    display.value = "Math error: Can't divide by 0"
  }
  else if (secondNum !== '') {
    result = operate(firstNum, secondNum, operator);
    display.value = Math.round(result * 100) / 100;
    firstNum = result;
    secondNum = '';
    currentNum = 'secondNum'
    
    operator = event.target.value;
  }
})

equalsButton.addEventListener('click', (event) => {
  if (currentNum === 'secondNum' && secondNum !== '') {
    result = operate(firstNum, secondNum, operator);
    display.value = Math.round(result * 100) / 100;
    firstNum = display.value;
    secondNum = '';
  }
})
