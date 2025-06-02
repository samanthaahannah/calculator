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
screenP.textContent = "0"
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




function operate(num1, num2, operand){
    let sum = 0;
    let number1 = 0;
    let number2 = 0;
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);
    switch (operand){
        case '-':
            sum = number1 - number2
            return console.log(sum);
        case '+':
            sum = number1 + number2
            return console.log(sum);
        case '/': 
            sum = number1 / number2
            return console.log(sum);
        default:
            sum = number1 * number2
            return console.log(sum);
            
    }
}

/*Gets button presses & passes string for first number in calculation*/
function getDigits(){
    let x = '';
        let numbersButtons = document.getElementById('numbers-buttons');
        let decButton = document.getElementById('decimal-button');

        numbersButtons.addEventListener('click', (event) => {
        let target = event.target;
        switch(target.id){
            case 'no1-button':
                x = `1`;
                if (isFirst == true){
                num1.push(x);
                numStr1 = num1.join('');
                console.log(numStr1);
                return num1;

                }else if(isFirst == false){
                num2.push(x);
                numStr2 = num2.join('');
                console.log(numStr2);
                return num2;

                }
            case 'decimal-button':
                if(used == false && isFirst == true){
                    x = '.';
                    num1.push(x);
                    numStr1 = num1.join('');
                    console.log(numStr1);                
                    decButton.disabled = true;
                    used = true;
                return num1;
                }else if (used == false && isFirst == false){
                    x = '.';
                    num2.push(x);
                    numStr2 = num2.join('');
                    console.log(numStr2);                
                    decButton.disabled = true;
                    used = true;
                return num2;
                }
                break;
             case 'c-button':
                location.reload();
                break;
        }
    })
}


/*Gets button presses for second number in calculation & adds to string*/


function getOperators(){
        let x = '';
        let operatorButtons = document.getElementById('operator-buttons');
        
        operatorButtons.addEventListener('click', (event) => {
        let target = event.target

        switch(target.id){
            case 'plus-button':
                x = '+'
                operand += x;
                console.log('+');
                isFirst = false;
                used = false;
                return operand;
        }
    })
}
let num1 = [];
let num2 = [];
let numStr1 = '';
let numStr2 = '';
let operand = '';
let isFirst = true;
let used = false;


function startOp(){
    getDigits();
    getOperators();
}

startOp();