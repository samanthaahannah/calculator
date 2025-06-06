
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

const cButton = document.querySelector('.c-button');

const decimalButton = document.querySelector('.decimal-button');

/*Global variables*/
let decButton = document.getElementById('decimal-button');
let eqButton = document.getElementById('equals-button');

let clearButton = document.getElementById('c-button');
let delButton = document.getElementById('d-button');
let screenPara = document.getElementById('screen-p')

let num1 = [];
let num2 = [];

let numStr1 = '';
let numStr2 = '';
let operand = '';

let isFirst = true;

let result = 0;
let resultRounded = 0;
let totalResult = 0;
let isChain = false;

let isEqualsEnabled = true;
let isEqualed = false;

function deleteNumbers(){
    /*converting resultRounded to number, then to string again
    gets rid of trailing zeros*/
   
    let resultNum = +resultRounded;
    let restring = resultNum.toString();

    let numArray = restring.split('');

    delButton.addEventListener("click", (event) => {
        numArray.pop();
        resultRounded = numArray.join('');
    })

}

/*arithmatic functions*/{

function add(number1, number2){
    let convNum1 = parseFloat(number1);
    let convNum2 = parseFloat(number2);
    let sum = 0;
    let restring = '';
    sum = convNum1 + convNum2;
    restring = sum.toString();
    screenP.textContent = restring;
    decButton.disabled = false;
    numStr1 = restring;
    return numStr1;
}

function subtract(number1, number2){
    let convNum1 = parseFloat(number1);
    let convNum2 = parseFloat(number2);
    let sum = 0;
    let restring = '';
    sum = convNum1 - convNum2;
    restring = sum.toString();
    screenP.textContent = restring;
    decButton.disabled = false;
    return numStr1 = restring;
}

function multiply(number1, number2){
    let convNum1 = parseFloat(number1);
    let convNum2 = parseFloat(number2);
    let sum = 0;
    let restring = '';
    sum = convNum1 * convNum2;
    restring = sum.toString();
    screenP.textContent = restring;
    decButton.disabled = false;
    return numStr1 = restring;
}

function divide(number1, number2){
    let convNum1 = parseFloat(number1);
    let convNum2 = parseFloat(number2);
    let sum = 0;
    let restring = '';
    sum = convNum1 / convNum2;
    restring = sum.toString();
    screenP.textContent = restring;
    decButton.disabled = false;
    return numStr1 = restring;
}

/*Takes 2 number strings and calculates with operand using switch statment*/

    let operators = document.querySelector('#operator-buttons');
    operators.addEventListener("click",(event) => {
        let target = event.target;

        switch (target.id){
        case 'plus-button':
            operand = '+';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                add(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            break;
        case 'minus-button':
            operand = '-';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                add(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            break;
        case 'divide-button':
            operand = '/';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                add(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            break;
        case 'multiply-button':
            operand = '*';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                add(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            break;
            break;
        case 'equals-button':
            if(numStr1 != undefined && numStr2 != undefined && screenP.textContent != ''){
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                isEqualed = true;
                decButton.disabled = true;
                if(operand == '+'){
                    add(numStr1, numStr2);
                }
                else if(operand == '-'){
                    subtract(numStr1, numStr2);
                }
                else if(operand == '*'){
                    multiply(numStr1, numStr2);
                }else if(operand == '/'){
                    divide(numStr1, numStr2);
                }
            }
    }
    })


function enableDecimal ()
{
    decButton.disabled = false;
}

/*Creates two sets numbers (determined by whether isFirst is true or not) by
pushing string to two arrays (num1 & num2) and then joining into another string (numString1 & numString2)*/
function getDigits(){
    let numberButtons = [];
    
    for (let i = 0; i <=9; i++){
        numberButtons[i] = document.getElementById('no'+i+'-button');
        numberButtons[i].addEventListener("click", (event) => {
            
            if (isFirst == true){
            num2 = [];
            numStr2 = '';
            num1.push(i);
            numStr1 = num1.join('');
            screenPara.textContent = `${numStr1}`;

            }
            else if (isFirst == false && isEqualed == false){
                num2.push(i);
                numStr2 = num2.join('');
                screenPara.textContent = `${numStr2}`;
            }else if (isFirst == false && isEqualed == true){
                let tempArray = Array.from(numStr1);
                tempArray.push(i);
                numStr1 = tempArray.join('');
                screenPara.textContent = `${numStr1}`;
                isFirst = true;
            }

    })
    }

     delButton.addEventListener("click", (event) => {
        if(isFirst == true){
            num1.pop();
            numStr1 = num1.join('');
            screenPara.textContent = `${numStr1}`;
            if (num1.length <= 0){
                location.reload();
            }
        } 
        else if(isFirst == false && isChain == false){
            num2.pop();
            if (num2.includes('.') == true){
                decButton.disabled = true;
            }else{
                decButton.disabled = false;
            }
            numStr2 = num2.join('');
            screenPara.textContent = `${numStr2}`;
        }
        
    });

     

    decButton.addEventListener("click",(event) => {
    
        if(isFirst == true){
            num1.push('.');
            numStr1 = num1.join('');
            screenPara.textContent = `${numStr1}`;
            decButton.disabled = true;
        } 
        else if(isFirst == false){
            num2.push('.');
            numStr2 = num2.join('');
            screenPara.textContent = `${numStr2}`;
            decButton.disabled = true;
        }
    });

    
    clearButton.addEventListener("click",(event) => {
        location.reload();
    });
    return numStr1, numStr2;
}

getDigits();
}