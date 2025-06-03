{
const frame = document.querySelector('#container');

const innerFrame = document.createElement('div');
innerFrame.setAttribute("id", "inner-frame");
frame.appendChild(innerFrame);

const screenWrapper = document.createElement('div');
screenWrapper.setAttribute("id", "screen-wrapper");
innerFrame.appendChild(screenWrapper);

const screen = document.createElement('div');
screen.setAttribute("id", "screen");
screen.textContent = "";
screenWrapper.appendChild(screen);

const screenP = document.createElement('p');
screenP.setAttribute('id', 'screen-p');
screenP.textContent = "0";
screen.appendChild(screenP);

const buttonsWrapper = document.createElement('div');
buttonsWrapper.setAttribute("id", "buttons-wrapper");
innerFrame.appendChild(buttonsWrapper);

const numberButtons = document.createElement('div');
numberButtons.setAttribute("id", "numbers-buttons");
buttonsWrapper.appendChild(numberButtons);

const operatorButtons = document.createElement('div');
operatorButtons.setAttribute("id", "operator-buttons");
buttonsWrapper.appendChild(operatorButtons);

const plusButton = document.createElement('button');
plusButton.setAttribute("id", "plus-button");
plusButton.textContent = "+";
operatorButtons.appendChild(plusButton);

const minusButton = document.createElement('button');
minusButton.setAttribute("id", "minus-button");
minusButton.textContent = "-";
operatorButtons.appendChild(minusButton);

const multiplyButton = document.createElement('button');
multiplyButton.setAttribute("id", "multiply-button");
multiplyButton.textContent = "X";
operatorButtons.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.setAttribute("id", "divide-button");
divideButton.textContent = "÷";
operatorButtons.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.setAttribute("id", "equals-button");
equalsButton.textContent = "=";
operatorButtons.appendChild(equalsButton);


const no7Button = document.createElement('button');
no7Button.setAttribute("id", "no7-button");
no7Button.textContent = "7";
numberButtons.appendChild(no7Button);

const no8Button = document.createElement('button');
no8Button.setAttribute("id", "no8-button");
no8Button.textContent = "8";
numberButtons.appendChild(no8Button);

const no9Button = document.createElement('button');
no9Button.setAttribute("id", "no9-button");
no9Button.textContent = "9";
numberButtons.appendChild(no9Button);

const no4Button = document.createElement('button');
no4Button.setAttribute("id", "no4-button");
no4Button.textContent = "4";
numberButtons.appendChild(no4Button);

const no5Button = document.createElement('button');
no5Button.setAttribute("id", "no5-button");
no5Button.textContent = "5";
numberButtons.appendChild(no5Button);

const no6Button = document.createElement('button');
no6Button.setAttribute("id", "no6-button");
no6Button.textContent = "6";
numberButtons.appendChild(no6Button);

const no1Button = document.createElement('button');
no1Button.setAttribute("id", "no1-button");
no1Button.textContent = "1";
numberButtons.appendChild(no1Button);

const no2Button = document.createElement('button');
no2Button.setAttribute("id", "no2-button");
no2Button.textContent = "2";
numberButtons.appendChild(no2Button);

const no3Button = document.createElement('button');
no3Button.setAttribute("id", "no3-button");
no3Button.textContent = "3";
numberButtons.appendChild(no3Button);

const dButton = document.createElement('button');
dButton.setAttribute("id", "d-button");
dButton.textContent = "DEL";
numberButtons.appendChild(dButton);

const no0Button = document.createElement('button');
no0Button.setAttribute("id", "no0-button");
no0Button.textContent = "0";
numberButtons.appendChild(no0Button);

const cButton = document.createElement('button');
cButton.setAttribute("id", "c-button");
cButton.textContent = "C";
numberButtons.appendChild(cButton);

const decimalButton = document.createElement('button');
decimalButton.setAttribute("id", "decimal-button");
decimalButton.textContent = ".";
numberButtons.appendChild(decimalButton);
}

let sum = 0;
let roundedSum = 0;
roundedSum = +sum.toFixed(3);

/*Takes 2 number strings and calculates with operand using switch statment*/
function operate(numStr1, numStr2, operand){
    const screenP = document.getElementById('screen-p');
    let operand1 = operand;
    let number1 = parseFloat(numStr1);
    let number2 = parseFloat(numStr2);
    let roundedSum = 0;
    let roundedNumber1 = 0;
    let roundedNumber2 = 0;
    let roundedPreviousSum = 0;
    switch (operand){
        case '-':
            if (isChained ==false){
                sum = number1 - number2;
                num1 = [];
                num2 = [];
                isChained = true;
                roundedSum = +sum.toFixed(3);
                roundedNumber1 = +number1.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                console.log(`${number1}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedNumber1}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
               /* return console.log(`${number1}${operand1}${number2} = ${sum}`);*/
            }else if (isChained == true){
                previousSum = sum;9
                sum = sum - number2;
                num1 = [];
                num2 = [];
                roundedSum = +sum.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                roundedPreviousSum = +previousSum.toFixed(3);
                console.log(`${previousSum}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedPreviousSum}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
            }
        case '+':
            if (isChained ==false){
                sum = number1 + number2;
                num1 = [];
                num2 = [];
                isChained = true;
                console.log(`${number1}${operand1}${number2} = ${sum}`);
                roundedSum = +sum.toFixed(3);
                roundedNumber1 = +number1.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                screenP.textContent = `${roundedNumber1}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
            }else if (isChained == true){
                previousSum = sum;
                sum = sum + number2;
                num1 = [];
                num2 = [];
                roundedSum = +sum.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                roundedPreviousSum = +previousSum.toFixed(3);
                console.log(`${previousSum}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedPreviousSum}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
            }
        case '/': 
             if (isChained ==false){
                sum = number1 / number2;
                num1 = [];
                num2 = [];
                isChained = true;
                roundedSum = +sum.toFixed(3);
                roundedNumber1 = +number1.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                console.log(`${number1}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedNumber1}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
            }else if (isChained == true){
                previousSum = sum;
                sum = sum / number2;
                num1 = [];
                num2 = [];
                roundedSum = +sum.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                roundedPreviousSum = +previousSum.toFixed(3);
                console.log(`${previousSum}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedPreviousSum}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
            }
        case '*':
             if (isChained ==false){
                sum = number1 * number2;
                num1 = [];
                num2 = [];
                isChained = true;
                roundedSum = +sum.toFixed(3);
                roundedNumber1 = +number1.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                console.log(`${number1}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedNumber1}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;            
            }else if (isChained == true){
                previousSum = sum;
                sum = sum * number2;
                num1 = [];
                num2 = [];
                roundedSum = +sum.toFixed(3);
                roundedNumber2 = +number2.toFixed(3);
                roundedPreviousSum = +previousSum.toFixed(3);
                console.log(`${previousSum}${operand1}${number2} = ${sum}`);
                screenP.textContent = `${roundedPreviousSum}${operand1}${roundedNumber2} = ${roundedSum}`;
                break;
            }
            
    }
}

/*Creates two sets numbers (determined by whether isFirst is true or not) by
pushing string to two arrays (num1 & num2) and then joining into another string (numString1 & numString2)*/
function getDigits(){
    let x = '';
        let numbersButtons = document.getElementById('numbers-buttons');
        const screenP = document.getElementById('screen-p')
        numbersButtons.addEventListener('click', (event) => {
        let target = event.target;
        switch(target.id){
            case 'no1-button':
                x = `1`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                 }
            case 'no2-button':
                x = `2`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
            case 'no3-button':
                x = `3`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
            case 'no4-button':
                x = `4`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                 }
            case 'no5-button':
                x = `5`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                 }
            case 'no6-button':
                x = `6`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
            case 'no7-button':
                x = `7`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false && isChained == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
                
            case 'no8-button':
                x = `8`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
            case 'no9-button':
                x = `9`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
            case 'no0-button':
                x = `0`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                screenP.textContent = `${numStr1}`;
                break;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                
                }
            case 'decimal-button':
                if(isFirst == true){
                    decButton.disabled = true;
                    x = '.';
                    num1.push(x);
                    numStr1 = num1.join('');
                    screenP.textContent = `${numStr1}`;
                    break;
                }else if (isFirst == false){
                    decButton.disabled = true;
                    x = '.';
                    num2.push(x);
                    numStr2 = num2.join('');
                    screenP.textContent = `${numStr1}${operand}${numStr2}`;
                break;
                }
             case 'c-button':
                location.reload();
                break;
        }
    })
}


/*Gets operand for calculation in operate()*/
function getOperators(){
        let operatorButtons = document.getElementById('operator-buttons');
                const screenP = document.getElementById('screen-p')

        operatorButtons.addEventListener('click', (event) => {
        let target = event.target

        switch(target.id){
            case 'plus-button':
                decButton.disabled = false;
                operand = '+';
                isFirst = false;
                screenP.textContent = `${numStr1}+`;
                break;
            case 'minus-button':
                decButton.disabled = false;
                operand = '-';
                isFirst = false;
                screenP.textContent = `${numStr1}-`;
                break;
            case 'divide-button':
                decButton.disabled = false;
                operand = '/';
                isFirst = false;
                screenP.textContent = `${numStr1}/`;
                break;
            case 'multiply-button':
                decButton.disabled = false;
                operand = '*';
                isFirst = false;
                screenP.textContent = `${numStr1}*`;
                break;
            case 'equals-button':
                operate(numStr1, numStr2, operand);
                operand = '=';
                break;
        }
    })
}


/*Arrays holding digits for first number and second number*/
let num1 = [];
let num2 = [];

/*Strings created from number arrays*/
let numStr1 = '';
let numStr2 = '';
const screenP = document.getElementById('screen-p')



/*string to hold operand +, -, *, /, or =*/
let operand = '';

/*Total of previous calculation to help create chaining effect*/
let previousSum = 0;

/*For getDigits function to tell switch 
statement which number array to add digts into*/
let isFirst = true;

/*For operate function to tell switch statement 
whether sum is chained from a previous calculation*/
let isChained = false;

/*The deciml button*/
let decButton = document.getElementById('decimal-button');


function startOp(){
    getDigits();
    getOperators();
}

startOp();