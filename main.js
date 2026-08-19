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
  console.log(`${a} ${operator} ${b}`)
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

function reset() {
  currentNum = 'firstNum';
  firstNum = '';
  secondNum = '';
  result = '';
  display.value = '';
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
  if (event.target.value == undefined) {
    return 1;
  }
  if (display.value.includes('.') && event.target.value == '.') {
    return 0;
  }
  if (firstNum == result && secondNum == '' && operator == '') {
    reset()
  }
  if (currentNum == 'firstNum') {
    firstNum += event.target.value;
    display.value = firstNum;
  }
  else if (currentNum == 'secondNum') {
    secondNum += event.target.value;
    display.value = secondNum;
  }
})

clearButton.addEventListener('click', reset)

operators.addEventListener('click', (event) => {
  if (event.target.value == undefined) {
  return 1;
  }
  if (secondNum == '') {
    operator = event.target.value;
    currentNum = 'secondNum';
  }
  else if (secondNum == '0' && event.target.value == '/') {
    reset();
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
  if (secondNum == '0' && operator == '/') {
  reset();
  display.value = "Math error: Can't divide by 0"
  }
  else if (currentNum === 'secondNum' && secondNum !== '') {
    result = operate(firstNum, secondNum, operator);
    display.value = Math.round(result * 100) / 100;
    firstNum = display.value;
    secondNum = '';
    operator = '';
  }
})
