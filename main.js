function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  if (b == '') {
    return a;
  }
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
  if (secondNum !== '') {
    display.value = operate(firstNum, secondNum, operator)
    result = display.value;
    firstNum = result;
    secondNum = '';
    currentNum = 'secondNum'
    
    operator = event.target.value;
  }
})
