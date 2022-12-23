let result = 0;
let x = 0;
let y = 0;
let operator = 0; 

function main() {
    let numbers = document.querySelectorAll('.numbers');
    let operators = document.querySelectorAll('.operators');
    let equal = document.querySelector('#equal');
    let display = document.querySelector('#text');
    let clear = document.querySelector('#clear');
    let reset = document.querySelector('#reset');
    let decimal = document.querySelector('#decimal');

    const functionLibrary = {
        clearer: function () {
            if (display.textContent.length > 1 && operator == 0) {
                x = x.slice(0,x.length-1);
                display.textContent = display.textContent.slice(0, display.textContent.length-1);
                } else if (display.textContent.length > 1 && !(operator == 0)) {
                y = y.slice(0,y.length-1);
                display.textContent = display.textContent.slice(0, display.textContent.length-1);
                } else {
                x = '0';
                display.textContent = 0;
            }
        },
        deleter: function () {
            display.textContent = 0;
            x = 0;
            y = 0;
            operator = 0;
        },
        decimalAdder: function () {
            if (!(display.textContent.includes('.'))) {
                if (operator ==0) {
                    x += decimal.textContent;
                } else {
                    y += decimal.textContent; 
                }
            }
        }, 
        equalizer: function () {
            parseFloat(x);
            parseFloat(y);
            if (!(operator ==0)) {
                operate(operator,x,y);
                if (!(result%2===0) && !(result%2===1)) {
                    result = (Math.round(result * 100) / 100).toFixed(2);
                }
                    display.textContent = result;
                    x = String(result);
                    y = '0';
                    operator = 0;
                }
        },
    }
    
    for (let i=1; i<operators.length+1;i++) {
    operators[i-1].addEventListener('click', ()=> {
        operator = i;
    })
    }


    for (let i =0; i<numbers.length;i++) {
        numbers[i].addEventListener('click',() => {
         if (operator == 0) {
            x += numbers[i].textContent;
            display.textContent = parseFloat(x);
         } else {
            y += numbers[i].textContent;
            display.textContent = parseFloat(y);
            }
        })
    }

    document.onkeydown = event => {
        let keyinfo = () => {
            if (operator == 0) {
                x += event.key;
                display.textContent = parseFloat(x);
            } else {
                y += event.key;
                display.textContent = parseFloat(y);
            }
        }

        if (event.key == '9') {keyinfo()}
        else if (event.key == '8') {keyinfo()}
        else if (event.key == '7') {keyinfo()}
        else if (event.key == '6') {keyinfo()}
        else if (event.key == '5') {keyinfo()}
        else if (event.key == '4') {keyinfo()}
        else if (event.key == '3') {keyinfo()}
        else if (event.key == '2') {keyinfo()}
        else if (event.key == '1') {keyinfo()}
        else if (event.key == '0') {keyinfo()}
        else if (event.key == '/') {operator = 1}
        else if (event.key == '*') {operator = 2}
        else if (event.key == '-') {operator = 3}
        else if (event.key == '+') {operator = 4}
    }
    
    clear.addEventListener('click', functionLibrary.clearer);
    reset.addEventListener('click', functionLibrary.deleter);
    decimal.addEventListener('click', functionLibrary.decimalAdder);
    equal.addEventListener('click', functionLibrary.equalizer);

    window.addEventListener('keydown', event => {
        switch (event.code) {
            case 'Backspace': functionLibrary.clearer(); break;
            case 'Delete': functionLibrary.deleter(); break;
            case 'Period': functionLibrary.decimalAdder(); break;
            case 'NumpadDecimal': functionLibrary.decimalAdder(); break;
            case 'Enter': functionLibrary.equalizer();break;
            case 'NumpadEnter': functionLibrary.equalizer(); break;
        }
    })
}

main();

let functionObj = {
    add: function (x,y) {
        result = x+y;
        return result
    }, 
    subtract: function (x,y) {
        result = x-y;
        return result;
    },
    multiply: function (x,y) {
        result = x*y;
        return result;
    },
    divide: function (x,y) {
        result = x/y;
        return result;
    },
}

const operate = (operator,x,y) => {
    x = parseFloat(x);
    y = parseFloat(y);
    switch (operator) {
        case 1: functionObj.divide(x,y); break;
        case 2: functionObj.multiply(x,y); break;
        case 3: functionObj.subtract(x,y); break;   
        case 4: functionObj.add(x,y); break;
    }
}

