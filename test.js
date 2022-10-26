//////selectors//////
const numbersBtns = document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
const featureBtns = document.querySelectorAll(`.feature`);
const currentDisplay = document.querySelector(`.current-operation`);
const lastDisplay = document.querySelector(`.last-operation`);

/////Initial Parameters/////
let numEntered;

const object = {
  num1: null,
  num2: null,
  operator: null,
  strForDisplay: ``,
};
let result;
const operatorsArr = [`+`, `-`, `*`, `/`, `=`];

////////Event//////
window.addEventListener(`keydown`, function (e) {
  //for enter number
  //maximum length of display is 25
  //e.key!==` ` prevents user enter space key.
  if (object.strForDisplay.length <= 25 && e.key !== ` `) {
    //if user press a number key
    if (+e.key === +e.key) enterNumber(e.key);
    //For decimal point

    if (e.key === `.` && object.strForDisplay.indexOf(`.`) === -1)
      enterNumber(e.key);
  }

  //for enter operator
  operatorsArr.forEach((oper) => {
    if (oper === e.key) operator(e.key);
  });
});

numbersBtns.forEach((num) => num.addEventListener(`keydown`, enterNumber));
// operatorBtns.forEach((oper) => oper.addEventListener(`keydown`, operator));

////Functions/////
function enterNumber(num) {
  object.strForDisplay += num;
  if (object.num1 === null) currentDisplay.textContent = object.strForDisplay;
  else
    currentDisplay.textContent =
      object.num1 + object.operator + object.strForDisplay;
}

function operator(oper) {
  if (object.num1 === null) {
    object.num1 = +object.strForDisplay;
    object.operator = oper;
    currentDisplay.textContent = object.num1 + object.operator;
    object.strForDisplay = ``;
  } else {
    object.num2 = +object.strForDisplay;
  }

  console.log(object);
  if (object.num1 !== null && object.num2 !== null) {
    if ((object.operator = `+`)) {
      result = object.num1 + object.num2;

      lastDisplay.textContent =
        object.num1 + object.operator + object.strForDisplay;

      currentDisplay.textContent = result;
      object.num1 = result;
      object.num2 = null;
      object.operator = null;
      console.log(object);
    }
  }
}
