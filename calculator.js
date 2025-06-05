
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
let equaled = false;

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
     isChain = true;
    
    }else if (isChain == true){
        totalResult += number2;
        console.log('adding');
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
    totalResult += result;
    resultRounded = totalResult.toFixed(2);
    screenPara.textContent = +resultRounded;
     isChain = true;
    
    }else if (isChain == true){
        totalResult -= number2;
        console.log('adding');
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
    resultRounded = totalResult.toFixed(2);
    screenPara.textContent = +resultRounded;
     isChain = true;
    
    }else if (isChain == true){
        totalResult *= number2;
        console.log('adding');
        resultRounded = totalResult.toFixed(2);
        screenPara.textContent = +resultRounded;
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
    resultRounded = totalResult.toFixed(2);
    screenPara.textContent = +resultRounded;
     isChain = true;
    
    }else if (isChain == true){
        totalResult = totalResult / number2;
        console.log('adding');
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
        case 'plus-button':
            operand = '+';
            if(!num2.length == 0 && equaled == false){
                screenPara.textContent = `${numStr1}${operand}${numStr2}`;
                screenPara.textContent = `${operand}${resultRounded}`;
                console.log('fired');
                add(numStr1,numStr2);
            }
            eqButton.disabled = false;
            equaled = false;
            isFirst = false;
            num2 = [];
            enableDecimal();
            break;
        case 'minus-button':
             operand = '-';
            if(!num2.length == 0 && equaled == false){
                screenPara.textContent = `${numStr1}${operand}${numStr2}`;
                screenPara.textContent = `${operand}${resultRounded}`;
                console.log('fired');
                add(numStr1,numStr2);
            }
            eqButton.disabled = false;
            equaled = false;
            isFirst = false;
            num2 = [];
            enableDecimal();
            break;
        case 'divide-button': 
            operand = '/';
            if(!num2.length == 0 && equaled == false){
                screenPara.textContent = `${numStr1}${operand}${numStr2}`;
                screenPara.textContent = `${operand}${resultRounded}`;
                console.log('fired');
                add(numStr1,numStr2);
            }
            eqButton.disabled = false;
            equaled = false;
            isFirst = false;
            num2 = [];
            enableDecimal();
            break;
        case 'multiply-button':
            operand = '*';
            if(!num2.length == 0 && equaled == false){
                screenPara.textContent = `${numStr1}${operand}${numStr2}`;
                screenPara.textContent = `${operand}${resultRounded}`;
                console.log('fired');
                add(numStr1,numStr2);
            }
            eqButton.disabled = false;
            equaled = false;
            isFirst = false;
            num2 = [];
            enableDecimal();
            break;
        case 'equals-button':
            equaled = true;
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
                eqButton.disabled = false;
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
                num2.push(i);
                numStr2 = num2.join('');
                screenPara.textContent = `${+numStr1}${operand}${+numStr2}`;
                console.log(`${numStr1}${operand}${numStr2}`);
            }
            else if (isFirst == false && isChain == true){
                console.log(num2);
                num2.push(i);
                numStr2 = num2.join('');
                console.log(num2)
                screenPara.textContent = `${+resultRounded}${operand}${+numStr2}`;
            }
                 
    })
    }

     delButton.addEventListener("click", (event) => {
        console.log(num1);
        if(isFirst == true){
            num1.pop();
            if (num1.includes('.') == true){
                decButton.disabled = true;
            }else{
                decButton.disabled = false;
            }
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
        }else if(isFirst == false && isChain == true){
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
            screenPara.textContent = numStr1;
        } 
        else if(isFirst == false && isChain == false){
            num2.push('.');
             if (num1.includes('.') == true){
                decButton.disabled = true;
            }else{decButton.disabled = false}
            decButton.disabled = true;
            numStr2 = num2.join('');
            screenPara.textContent = `${numStr1}${operand}${numStr2}`;
            
        }else if(isFirst == false && isChain == true){
            num2.push('.');
             if (num1.includes('.') == true){
                decButton.disabled = true;
            }else{decButton.disabled = false}
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
