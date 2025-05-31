const frame = document.querySelector('#container');

const innerFrame = document.createElement('div');
innerFrame.setAttribute("id", "inner-frame");
frame.appendChild(innerFrame);

const screenWrapper = document.createElement('div');
screenWrapper.setAttribute("id", "screen-wrapper");
innerFrame.appendChild(screenWrapper);

const screen = document.createElement('input');
screen.setAttribute("id", "screen");
screenWrapper.appendChild(screen);

const buttonsWrapper = document.createElement('div');
buttonsWrapper.setAttribute("id", "buttons-wrapper");
innerFrame.appendChild(buttonsWrapper);

const numberButtons = document.createElement('div');
numberButtons.setAttribute("id", "numbers-buttons");
buttonsWrapper.appendChild(numberButtons);

const row4 = document.createElement('div');
row4.setAttribute("id", "row4");
numberButtons.appendChild(row4);

const row3 = document.createElement('div');
row3.setAttribute("id", "row3");
numberButtons.appendChild(row3);

const row2 = document.createElement('div');
row2.setAttribute("id", "row2");
numberButtons.appendChild(row2);

const row1 = document.createElement('div');
row1.setAttribute("id", "row1");
numberButtons.appendChild(row1);

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
divideButton.textContent = "%";
operatorButtons.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.setAttribute("id", "equals-button");
equalsButton.textContent = "=";
operatorButtons.appendChild(equalsButton);

const no7Button = document.createElement('button');
no7Button.setAttribute("id", "no7-button");
no7Button.textContent = "7";
row4.appendChild(no7Button);

const no8Button = document.createElement('button');
no8Button.setAttribute("id", "no8-button");
no8Button.textContent = "8";
row4.appendChild(no8Button);

const no9Button = document.createElement('button');
no9Button.setAttribute("id", "no9-button");
no9Button.textContent = "9";
row4.appendChild(no9Button);

const no4Button = document.createElement('button');
no4Button.setAttribute("id", "no4-button");
no4Button.textContent = "4";
row3.appendChild(no4Button);

const no5Button = document.createElement('button');
no5Button.setAttribute("id", "no5-button");
no5Button.textContent = "5";
row3.appendChild(no5Button);

const no6Button = document.createElement('button');
no6Button.setAttribute("id", "no6-button");
no6Button.textContent = "6";
row3.appendChild(no6Button);

const no1Button = document.createElement('button');
no1Button.setAttribute("id", "no1-button");
no1Button.textContent = "1";
row2.appendChild(no1Button);

const no2Button = document.createElement('button');
no2Button.setAttribute("id", "no2-button");
no2Button.textContent = "2";
row2.appendChild(no2Button);

const no3Button = document.createElement('button');
no3Button.setAttribute("id", "no3-button");
no3Button.textContent = "3";
row2.appendChild(no3Button);

const no0Button = document.createElement('button');
no0Button.setAttribute("id", "no0-button");
no0Button.textContent = "0";
row1.appendChild(no0Button);


function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}

function operate(){

}