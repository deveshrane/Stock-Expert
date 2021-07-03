const numbers = document.querySelectorAll('.numbers');
const disCalc = document.querySelector('#display-calculations');
const disRes = document.querySelector('#display-result');
const operate = document.querySelectorAll('.operator');
const clr = document.getElementById('clear');
const equal = document.querySelector('.equal');
let buttonText = "";
let screenValue = "";
let operator = "";
let res = 0;
input();
function input() {
    for (item of numbers) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            screenValue += buttonText;
            console.log(screenValue);
            displayCalcBtn();
        })
    }
    for (item of operate) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            screenValue += buttonText;
            operator = e.target.innerText;
            displayCalcOp();
        })
    }
    equal.addEventListener('click', () => {
        operat();
    })
    clr.addEventListener('click', () => {
        clear();
    })
}
function operat() {
    res = eval(screenValue);
    displayRes();
}
function displayCalcBtn() {
    disCalc.value = disCalc.value + buttonText;
}
function displayCalcOp() {
    disCalc.value = disCalc.value + operator;
}
function clear() {
    disCalc.value = "";
    disRes.value = "";
    operator = "";
    buttonText = "";
    screenValue = "";
}
function displayRes() {
    disRes.value = "=" + res;
}