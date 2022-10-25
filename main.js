//////selectors//////
const numbersBtns = document.querySelectorAll(`.number`);

const operatorBtns = document.querySelectorAll(`.operator`);
const featureBtns = document.querySelectorAll(`.feature`);

/////Initial Parameters/////
let valueEntered;
const object = {
  num1: null,
  num2: null,
  operator: null,
};
let result;

////// + - x ÷ /////////
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

////////Event//////
window.addEventListener(`keydown`, function (e) {
  console.log(e.key);
});

numbersBtns.forEach((num) => num.addEventListener(`keydown`, enterNumber));
operatorBtns.forEach((oper) => oper.addEventListener(`keydown`, operator));

////Event Functions///////

///1. store entered number into the object

function enterNumber(e) {
  console.log(e.target);
}

function operator() {}
