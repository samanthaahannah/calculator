
const frame = document.querySelector('#container');

let screenP = document.querySelector('p');

const plusButton = document.querySelector('.plus-buttom');

const minusButton = document.querySelector('.minus-button');

const multiplyButton = document.querySelector('.multiply-button');

const divideButton = document.querySelector('.divide-button');

const equalsButton = document.querySelector('.equals-button');

const numberButtons = [];

for(let i = 0; i <=9; i++){
    numberButtons[i]=document.querySelector('no'+i+'-button');
}

const dButton = document.querySelector('.del-button');

let cButton = document.querySelector('.c-button');

const decimalButton = document.querySelector('.decimal-button');


function add(numStr1, numStr2){
    let number1 = 0;
    let number2 = 0;
    number1 = parseFloat(numStr1)
    number2 = parseFloat(numStr2)

    result = number1 + number2;
    resultRounded = result.toFixed(2);
    screenP.textContent = resultRounded;
}

function subtract(numStr1, numStr2){
    let number1 = 0;
    let number2 = 0;
    number1 = parseFloat(numStr1)
    number2 = parseFloat(numStr2)

    result = number1 - number2;
    resultRounded = result.toFixed(2);
    screenP.textContent = resultRounded;
}

function multiply(numStr1, numStr2){
    let number1 = 0;
    let number2 = 0;
    number1 = parseFloat(numStr1)
    number2 = parseFloat(numStr2)

    result = number1 * number2;
    resultRounded = result.toFixed(2);
    screenP.textContent = resultRounded;
}

function divide(numStr1, numStr2){
    let number1 = 0;
    let number2 = 0;
    number1 = parseFloat(numStr1)
    number2 = parseFloat(numStr2)

    result = number1 / number2;
    resultRounded = result.toFixed(2);
    screenP.textContent = resultRounded;
}

/*Takes 2 number strings and calculates with operand using switch statment*/
function getOperator(operand){
    let operators = document.querySelector('#operator-buttons');

    operators.addEventListener("click",(event) => {
        let target = event.target;

        switch (target.id){
        case 'minus-button':
            operand = '-'
            fullExpr.push(numStr1);
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenP.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'plus-button':
            operand = '+'
            fullExpr.push(numStr1);
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenP.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'divide-button': 
            operand = '/'
            fullExpr.push(numStr1);
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenP.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'multiply-button':
            operand = '*'
            fullExpr.push(numStr1);
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenP.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'equals-button':
            if (operand = '+'){
                add(numStr1,numStr2);
                console.log(operand);
            } 
            else if(operand = '-'){
                subtract(numStr1,numStr2)
            }
            else if(operand = '/'){
                divide(numStr1,numStr2)}
            else if(operand = '*')
                {multiply(numStr1.numStr2)
                }
            break;

    }
    })
}

function enableDecimal ()
{
    decButton.disabled = false;
}

/*Creates two sets numbers (determined by whether isFirst is true or not) by
pushing string to two arrays (num1 & num2) and then joining into another string (numString1 & numString2)*/
function getDigits(){
    let used = false;
    let numberButtons = [];
    for (let i = 0; i <=9; i++){
        numberButtons[i] = document.getElementById('no'+i+'-button');
        numberButtons[i].addEventListener("click", (event) => {

            if (isFirst == true){
            num1.push(i);
            numStr1 = num1.join('');
            screenP.textContent = numStr1;
            }
            else if (isFirst == false){
                num2.push(i);
                numStr2 = num2.join('');
                screenP.textContent = fullStr+numStr2;
            }
                 
    })
    }
    decButton.addEventListener("click",(event) => {
    
        if(isFirst == true){
            num1.push('.');
            decButton.disabled = true;
            numStr1 = num1.join('');
            screenP.textContent = numStr1;
        } 
        else if(isFirst == false){
            num2.push('.');
            decButton.disabled = true;
            numStr2 = num2.join('');
            screenP.textContent = fullStr+numStr2;
        }
    });
    cButton.addEventListener("click",(event) => {
        location.reload();
    });
    getOperator();

}
/*Arrays holding digits for first number and second number*/
let num1 = [];
let num2 = [];
let fullExpr = [];
/*Strings created from number arrays*/
let numStr1 = '';
let numStr2 = '';
let fullStr = '';
screenP = document.getElementById('screen-p')


/*string to hold operand +, -, *, /, or =*/
let operand = '';

/*For getDigits function to tell switch 
statement which number array to add digts into*/
let isFirst = true;

/*For operate function to tell switch statement 
whether sum is chained from a previous calculation*/
let isChained = false;

/*The deciml button*/
let decButton = document.getElementById('decimal-button');

/*The clear page button*/
cButton = document.getElementById('c-button');

function startOp(){
    getDigits();
}

startOp();