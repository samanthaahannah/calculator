
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
let fullExpr = [];

let numStr1 = '';
let numStr2 = '';
let fullStr = '';

let isFirst = true;
let operand = '';
let result = 0;
let resultRounded = 0;
let totalResult = 0;
let isChain = false;

let isEqualsEnabled = true;

console.log(isChain);

function deleteNumbers(){
    /*converting resultRounded to number, then to string again
    gets rid of trailing zeros*/
   
    let resultNum = +resultRounded;
    let restring = resultNum.toString();

    console.log(restring);

    let numArray = restring.split('');

    console.log(numArray)

    delButton.addEventListener("click", (event) => {
        numArray.pop();
        console.log(typeof numArray);
        console.log(numArray);
        resultRounded = numArray.join('');
        console.log(resultRounded);
    })

}

/*arithmatic functions*/{

function add(numberString1, numberString2){
    let number1 = 0;
    let number2 = 0;

    number1 = parseFloat(numberString1)
    number2 = parseFloat(numberString2)

    if (isChain == false){
    result = number1 + number2;
    totalResult += result;
    resultRounded = totalResult.toFixed(2);
    screenPara.textContent = +resultRounded;
    
    }else if (isChain == true){
        totalResult += number2;
        resultRounded = totalResult.toFixed(2);
        screenPara.textContent = +resultRounded;
    }

}

function subtract(numberString1, numberString2){
    let number1 = 0;
    let number2 = 0;

    number1 = parseFloat(numberString1)
    number2 = parseFloat(numberString2)

    if (isChain == false){
    result = number1 - number2;
    totalResult -= result;
    resultRounded = result.toFixed(2);
    screenPara.textContent = +resultRounded;

    }else if (isChain == true){
        totalResult -= number2;
        resultRounded = totalResult.toFixed(2);
        screenPara.textContent = +resultRounded;
    }
}

function multiply(numberString1, numberString2){
    let number1 = 0;
    let number2 = 0;

    number1 = parseFloat(numberString1)
    number2 = parseFloat(numberString2)

    if (isChain == false){
    result = number1 * number2;
    totalResult += result;
    resultRounded = result.toFixed(2);
    screenPara.textContent = +resultRounded;

    }else if (isChain == true){
        totalResult *= number2;
        resultRounded = totalResult.toFixed(2);
        screenPara.textContent = +resultRounded;
        console.log(totalResult);
    }
}

function divide(numberString1, numberString2){
    let number1 = 0;
    let number2 = 0;

    number1 = parseFloat(numberString1)
    number2 = parseFloat(numberString2)

    if (isChain == false){
    result = number1 / number2;
    totalResult += result;
    resultRounded = result.toFixed(2);
    screenPara.textContent = +resultRounded;
    }else if (isChain == true){
        totalResult = totalResult / number2;
        resultRounded = totalResult.toFixed(2);
        screenPara.textContent = +resultRounded;
    }
}
}

/*Takes 2 number strings and calculates with operand using switch statment*/
function getOperator(){
    
    let operators = document.querySelector('#operator-buttons');
    operators.addEventListener("click",(event) => {
        let target = event.target;

        switch (target.id){
        case 'minus-button':
            operand = '-'
            if (isChain == false){
                fullExpr.push(numStr1);
            } else if(isChain == true){
                num2 = [];
                fullExpr = [];
                fullExpr.push(+resultRounded);
                eqButton.disabled = false;
            }
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenPara.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'plus-button':
            operand = '+'
            if (isChain == false){
                fullExpr.push(numStr1);
            } else if(isChain == true){
                num2 = [];
                fullExpr = [];
                fullExpr.push(+resultRounded);
                eqButton.disabled = false;
            }
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenPara.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'divide-button': 
            operand = '/'
            if (isChain == false){
                fullExpr.push(numStr1);
            } else if(isChain == true){
                num2 = [];
                fullExpr = [];
                fullExpr.push(+resultRounded);
                eqButton.disabled = false;
            }
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenPara.textContent = fullStr;
            isFirst = false;
            enableDecimal();
            break;
        case 'multiply-button':
            operand = '*'
            if (isChain == false){
                fullExpr.push(numStr1);
            } else if(isChain == true){
                fullExpr = [];
                fullExpr.push(+resultRounded);
                eqButton.disabled = false;
            }
            fullExpr.push(operand);
            fullStr = fullExpr.join('');
            screenPara.textContent = fullStr;
            console.log(fullStr);
            isFirst = false;
            console.log(totalResult);
            enableDecimal();
            break;
        case 'equals-button':
            if (isEqualsEnabled == true){
                eqButton.disabled = true;
                if (operand == '+'){
                    add(numStr1,numStr2);
                    isChain = true;
                } 
                else if(operand == '-'){
                    subtract(numStr1,numStr2);
                    isChain = true;
                }
                else if(operand == '/'){
                    divide(numStr1,numStr2);
                    isChain = true;
    }
                else if(operand == '*')
                    {
                    multiply(numStr1,numStr2);
                    isChain = true;
                    }
                break;
            }else if (isEqualsEnabled == false){
                eButton.disabled = false;
            }
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
    let numberButtons = [];
    for (let i = 0; i <=9; i++){
        numberButtons[i] = document.getElementById('no'+i+'-button');
        numberButtons[i].addEventListener("click", (event) => {

            if (isFirst == true){
            num1.push(i);
            numStr1 = num1.join('');
            screenPara.textContent = numStr1;
            }
             else if (isFirst == false && isChain == false){
                console.log(num2)
                num2.push(i);
                numStr2 = num2.join('');
                screenPara.textContent = `${+numStr1}${operand}${numStr2}`;
            }
            else if (isFirst == false && isChain == true){
                console.log(num2)
                num2.push(i);
                numStr2 = num2.join('');
                screenPara.textContent = `${+resultRounded}${operand}${numStr2}`;
            }
                 
    })
    }
    
    decButton.addEventListener("click",(event) => {
    
        if(isFirst == true){
            num1.push('.');
            decButton.disabled = true;
            numStr1 = num1.join('');
            screenPara.textContent = numStr1;
        } 
        else if(isFirst == false && isChain == false){
            num2.push('.');
            console.log(num2);
            decButton.disabled = true;
            numStr2 = num2.join('');
            console.log(isChain);
            screenPara.textContent = `${+numStr1}${operand}${numStr2}`;
            
        }else if(isFirst == false && isChain == true){
            num2.push('.');
            console.log(num2);
            console.log('added');
            decButton.disabled = true;
            numStr2 = num2.join('');
            screenPara.textContent = `${+resultRounded}${operand}${numStr2}`;
            
        }
    });
    clearButton.addEventListener("click",(event) => {
        location.reload();
    });
    getOperator();
    
}

getDigits();
