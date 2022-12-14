//////selectors//////
const numbersBtns = document.querySelectorAll(`.number`);

const operatorBtns = document.querySelectorAll(`.operator`);
const featureBtns = document.querySelectorAll(`.feature`);
const currentDisplay = document.querySelector(`.current-operation`);
const lastDisplay = document.querySelector(`.last-operation`);
const ACButton = document.querySelector(`.clear`);
const deleteButton = document.querySelector(`.delete`);
const openBtn = document.querySelector(`.open`);
const screen = document.querySelector(`.screen`);

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

////////Keyboard Event//////
window.addEventListener(`keydown`, function (e) {
  //for enter number
  //maximum length of display is 25
  //e.key!==` ` prevents user enter space key.
  if (object.strForDisplay.length <= 25 && e.key !== ` `) {
    //if user press a number key
    if (+e.key === +e.key) enterNumber(e.key);
    //For decimal point

    if (e.key === `.`) {
      let result = [];
      let arr = object.strForDisplay.split(``);

      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === `.`) result.push(`.`);
      }
      console.log(result.length);

      if (result.length <= 1) {
        enterNumber(e.key);
      }
    }
  }

  //for enter operator
  operatorsArr.forEach((oper) => {
    if (oper === e.key) operator(e.key);
  });

  //for AC
  if (e.key === `Escape`) clearAll();

  //for DEL
  if (e.key === `Backspace`) del();
});

///Click Events//////

//number buttons
numbersBtns.forEach((num) =>
  num.addEventListener(`click`, function (e) {
    const clickButton = e.target.textContent;

    if (object.strForDisplay.length <= 25) {
      if (+clickButton === +clickButton) enterNumber(clickButton);
      //For decimal point

      if (clickButton === `.`) {
        let result = [];
        let arr = object.strForDisplay.split(``);

        for (let i = 0; i <= arr.length; i++) {
          if (arr[i] === `.`) result.push(`.`);
        }

        if (result.length <= 1) {
          enterNumber(clickButton);
        }
      }
    }
  })
);

//operator(+-*/=) buttons
operatorBtns.forEach((oper) =>
  oper.addEventListener(`click`, function (e) {
    const clickOperation = e.target.getAttribute(`data-key`);

    operatorsArr.forEach((oper) => {
      if (oper === clickOperation) operator(clickOperation);
    });
  })
);

//AC BUTTON
ACButton.addEventListener(`click`, clearAll);

//DEL BUTTON
deleteButton.addEventListener(`click`, del);

//Open Button
openBtn.addEventListener(`click`, function () {
  if (screen.classList.contains(`hidden`)) clearAll();

  screen.classList.toggle(`hidden`);
});

////Event Functions///////

///1. store first number into the object

function enterNumber(num) {
  numEntered = num; //'2'
  object.strForDisplay += numEntered; //`12+2`

  numEntered = +object.strForDisplay; //12

  currentDisplay.textContent = object.strForDisplay; //display:`12+`
}

///2. Perform and display operations.
function operator(oper) {
  //put number into object.num1 if its empty
  if (
    numEntered !== null &&
    +numEntered === +numEntered &&
    object.num1 === null
  ) {
    object.num1 = numEntered; //12
  }

  numEntered = null; //null

  //It's the first time user enter operator and the operator is not `=`
  if (!object.operator && oper !== `=` && object.num1) {
    object.operator = oper;
    object.strForDisplay += object.operator;
    currentDisplay.textContent = object.strForDisplay;
  }

  //It's the first time user enter operator and the operator is `=`
  else if (!object.operator && oper === `=`) {
    currentDisplay.textContent = object.strForDisplay;
  }
  //It's NOT the first time user enter operator and the operator is NOT `=`
  else if (object.operator && oper !== `=`) {
    if (object.strForDisplay.indexOf(`+`) > -1) {
      let arr = object.strForDisplay.split(``);

      let index = arr.indexOf(`+`);
      let secondNum = +arr.slice(index + 1).join(``);

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    } else if (
      object.strForDisplay.indexOf(`-`) > -1 &&
      object.strForDisplay.indexOf(`*`) < 0 &&
      object.strForDisplay.indexOf(`/`) < 0
    ) {
      let secondNum;
      let arr = object.strForDisplay.split(``);
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === `-`) result.push(i);
      }

      if (result.length === 1) {
        secondNum = +arr.slice(result[0] + 1).join(``);
      } else if (result.length === 2) {
        secondNum = +arr.slice(result[1] + 1).join(``);
      }

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    } else if (object.strForDisplay.indexOf(`*`) > -1) {
      let arr = object.strForDisplay.split(``);

      let index = arr.indexOf(`*`);
      let secondNum = +arr.slice(index + 1).join(``);

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    } else if (object.strForDisplay.indexOf(`/`) > -1) {
      console.log(`ok`);
      let arr = object.strForDisplay.split(``);

      let index = arr.indexOf(`/`);
      let secondNum = +arr.slice(index + 1).join(``);

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    }
  }

  //   It's NOT the first time user enter operator and the operator IS `=`
  else {
    if (object.strForDisplay.indexOf(`+`) > -1) {
      let arr = object.strForDisplay.split(``);

      let index = arr.indexOf(`+`);
      let secondNum = +arr.slice(index + 1).join(``);

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    } else if (
      object.strForDisplay.indexOf(`-`) > -1 &&
      object.strForDisplay.indexOf(`*`) < 0 &&
      object.strForDisplay.indexOf(`/`) < 0
    ) {
      let secondNum;
      let arr = object.strForDisplay.split(``);
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === `-`) result.push(i);
      }

      if (result.length === 1) {
        secondNum = +arr.slice(result[0] + 1).join(``);
      } else if (result.length === 2) {
        secondNum = +arr.slice(result[1] + 1).join(``);
      }

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    } else if (object.strForDisplay.indexOf(`*`) > -1) {
      let arr = object.strForDisplay.split(``);

      let index = arr.indexOf(`*`);
      let secondNum = +arr.slice(index + 1).join(``);

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    } else if (object.strForDisplay.indexOf(`/`) > -1) {
      console.log(`ok`);
      let arr = object.strForDisplay.split(``);

      let index = arr.indexOf(`/`);
      let secondNum = +arr.slice(index + 1).join(``);

      object.num2 = secondNum;
      object.strForDisplay += object.operator;
      currentDisplay.textContent = object.strForDisplay;
    }
  }

  //Calculation
  if (object.num1 !== null && object.num2 !== null) {
    if (oper !== `=`) {
      if (object.operator === `+`) {
        result = add(object.num1, object.num2);
        result = +result.toFixed(4);

        let arr1 = object.strForDisplay.split(``);
        object.strForDisplay = arr1.slice(0, -1).join(``);

        console.log(object.strForDisplay.split(``));
        lastDisplay.textContent = object.strForDisplay;

        object.strForDisplay = result + oper;

        currentDisplay.textContent = object.strForDisplay;
        object.num1 = result;

        object.operator = oper;
      } else if (object.operator === `-`) {
        result = subtract(object.num1, object.num2);
        result = +result.toFixed(4);

        let arr1 = object.strForDisplay.split(``);
        object.strForDisplay = arr1.slice(0, -1).join(``);

        lastDisplay.textContent = object.strForDisplay;

        object.strForDisplay = result + oper;

        currentDisplay.textContent = object.strForDisplay;
        object.num1 = result;

        object.operator = oper;
      } else if (object.operator === `*`) {
        result = multiply(object.num1, object.num2);
        result = +result.toFixed(4);

        let arr1 = object.strForDisplay.split(``);
        object.strForDisplay = arr1.slice(0, -1).join(``);

        lastDisplay.textContent = object.strForDisplay;

        object.strForDisplay = result + oper;

        currentDisplay.textContent = object.strForDisplay;
        object.num1 = result;

        object.operator = oper;
      } else if (object.operator === `/`) {
        result = divide(object.num1, object.num2);
        result = +result.toFixed(4);

        let arr1 = object.strForDisplay.split(``);
        object.strForDisplay = arr1.slice(0, -1).join(``);

        lastDisplay.textContent = object.strForDisplay;

        object.strForDisplay = result + oper;

        currentDisplay.textContent = object.strForDisplay;
        object.num1 = result;

        object.operator = oper;
      }
    }

    if (oper === `=`) {
      lastDisplay.textContent = object.strForDisplay
        .split(``)
        .slice(0, -1)
        .join(``);

      if (object.operator === `+`) {
        result = object.num1 + object.num2;
        result = +result.toFixed(4);
        currentDisplay.textContent = result;

        object.strForDisplay = result;
        object.num1 = result;
        object.num2 = null;
        object.operator = null;
      } else if (object.operator === `-`) {
        result = object.num1 - object.num2;
        result = +result.toFixed(4);
        currentDisplay.textContent = result;

        object.strForDisplay = result;
        object.num1 = result;
        object.num2 = null;
        object.operator = null;
      } else if (object.operator === `*`) {
        result = object.num1 * object.num2;
        result = +result.toFixed(4);
        currentDisplay.textContent = result;

        object.strForDisplay = result;
        object.num1 = result;
        object.num2 = null;
        object.operator = null;
      } else if (object.operator === `/`) {
        result = object.num1 / object.num2;
        result = +result.toFixed(4);
        currentDisplay.textContent = result;

        object.strForDisplay = result;
        object.num1 = result;
        object.num2 = null;
        object.operator = null;
      }
    }
  }
}

//3. Clear All
function clearAll() {
  numEntered = null;
  object.num1 = null;
  object.num2 = null;
  object.operator = null;
  object.strForDisplay = ``;

  result = null;
  currentDisplay.textContent = ``;
  lastDisplay.textContent = ``;
}

//4. delete
function del() {
  if (typeof object.strForDisplay !== `number`) {
    const deletedValue = object.strForDisplay[object.strForDisplay.length - 1];

    if (
      deletedValue !== `+` &&
      deletedValue !== `-` &&
      deletedValue !== `*` &&
      deletedValue !== `/`
    ) {
      const numAfterDel = object.strForDisplay.slice(0, -1);

      object.strForDisplay = ``;

      enterNumber(numAfterDel);
    } else {
      object.strForDisplay = object.strForDisplay.slice(0, -1);
      currentDisplay.textContent = object.strForDisplay;

      object.operator = null;
    }
  } else clearAll();
}
