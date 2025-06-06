
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
let addButton = document.getElementById('plus-button');
let multButton = document.getElementById('multiply-button');
let divButton = document.getElementById('divide-button');
let subButton = document.getElementById('minus-button');



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

let isOperandEnabled = true;
let isAddEnabled = true;
let isSubEnabled = true;
let isPlusEnabled = true;
let isMultEnabled = true;
let isDivEnabled = true;
let calculated = false;


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
    console.log(restring)
    decButton.disabled = false;
    numStr1 = restring;
    console.log(isEqualed);
    calculated = true;
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
    console.log(restring)
    decButton.disabled = false;
    numStr1 = restring;
    console.log(isEqualed);
    calculated = true;
    return numStr1;
}

function multiply(number1, number2){
    let convNum1 = parseFloat(number1);
    let convNum2 = parseFloat(number2);
    let sum = 0;
    let restring = '';
    sum = convNum1 * convNum2;
    restring = sum.toString();
    screenP.textContent = restring;
    console.log(restring)
    decButton.disabled = false;
    numStr1 = restring;
    console.log(isEqualed);
    calculated = true;
    return numStr1;
}

function divide(number1, number2){
    let convNum1 = parseFloat(number1);
    let convNum2 = parseFloat(number2);
    let sum = 0;
    let restring = '';
    sum = convNum1 / convNum2;
    restring = sum.toString();
    screenP.textContent = restring;
    console.log(restring)
    decButton.disabled = false;
    numStr1 = restring;
    console.log(isEqualed);
    calculated = true;
    return numStr1;
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
            isOperandEnabled = false;
            isFirst = false;
            decButton.disabled = false;
            eqButton.disabled = false;
            addButton.disabled = true;
            break;
        case 'minus-button':
            if(isSubEnabled == true){
                subButton.disabled = false;
            }
            operand = '-';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                subtract(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            eqButton.disabled = false;
            subButton.disabled = true;
            break;
        case 'divide-button':
            if(isDivEnabled == true){
                divButton.disabled = false;
            }
            operand = '/';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                divide(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            eqButton.disabled = false;
            divButton.disabled = true;
            break;
        case 'multiply-button':
            if(isMultEnabled == true){
                multButton.disabled = false;
            }
            operand = '*';
            isEqualed = false;
            num2 = [];
            if (isFirst == false && isEqualed == false){
                multiply(numStr1, numStr2);
            }
            isFirst = false;
            decButton.disabled = false;
            eqButton.disabled = false;
            multButton.disabled = true;
            break;
        case 'equals-button':
            eqButton.disabled = true;
            addButton.disabled = false;
            multButton.disabled = false;
            subButton.disabled = false;
            subButton.disabled = false;
            isFirst = true;
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
                eqButton.disabled = true;
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
            
            if (isFirst == true && isEqualed == false){
            num2 = [];
            numStr2 = '';
            num1.push(i);
            console.log(num1);
            numStr1 = num1.join('');
            screenPara.textContent = `${numStr1}`;
            }
            else if (isFirst == false && isEqualed == false){
                num2.push(i);
                numStr2 = num2.join('');
                screenPara.textContent = `${numStr2}`;
                eqButton.disabled = false;
                addButton.disabled = false;
                subButton.disabled = false;
                multButton.disabled = false;
                divButton.disabled = false;
                console.log('fire');
                console.log(isFirst);
                console.log(numStr2);
            }
            else if(calculated == true){
                let tempArray = Array.from(numStr1);
                tempArray.push(i);
                numStr1 = tempArray.join('');
                console.log(numStr1);
                screenPara.textContent = `${numStr1}`;
                calculated = false;
            
            }else if (isFirst == false && isEqualed == true){
                let tempArray = Array.from(numStr1);
                tempArray.push(i);
                numStr1 = tempArray.join('');
                addButton.disabled = false;
                subButton.disabled = false;
                multButton.disabled = false;
                divButton.disabled = false;
                eqButton.disabled = false;
                screenPara.textContent = `${numStr1}`;
                isFirst = true;
                isEqualed = false;
            }

    })
    }

     delButton.addEventListener("click", (event) => {
        if(isFirst == true && isEqualed == false){
            console.log(num1);
            num1.pop();
            numStr1 = num1.join('');
            screenPara.textContent = `${numStr1}`;
            console.log(`${numStr1}`);
            if (num1.length <= 0){
                location.reload();
            }
        } 
        else if(isFirst == false && isEqualed == false){
            console.log('delete')
            num2.pop();
            numStr2 = num2.join('');
            screenPara.textContent = `${numStr2}`;
            console.log(numStr2);
        }else if (isFirst == true && isEqualed == true){
            isEqualed = false;
                num1 = Array.from(numStr1);
                num1.pop();
                console.log(num1)
                console.log(numStr1)
                numStr1 = num1.join('');
                screenPara.textContent = `${numStr1}`;
                console.log(`${numStr1}`);
                isFirst = true;
            }
    });

     

    decButton.addEventListener("click",(event) => {
    
        if(isFirst == true && isEqualed == false){
            num1.push('.');
            numStr1 = num1.join('');
            screenPara.textContent = `${numStr1}`;
            decButton.disabled = true;
            console.log(`${numStr1}`);
        } 
        else if(isFirst == false && isEqualed == false){
            num2.push('.');
            numStr2 = num2.join('');
            screenPara.textContent = `${numStr2}`;
            decButton.disabled = true;
            console.log(`${numStr2}`);
        }else if (isFirst == true && isEqualed == true){
            isEqualed = true;
                let tempArray = Array.from(numStr1);
                tempArray.push('.');
                console.log(num1)
                console.log(numStr1)
                num1 = tempArray;
                numStr1 = tempArray.join('');
                screenPara.textContent = `${numStr1}`;
                console.log(`${numStr1}`);
                isFirst = true;
                isEqualed = false;
            }
    });

    
    clearButton.addEventListener("click",(event) => {
        location.reload();
    });
    return numStr1, numStr2;
}

getDigits();
}