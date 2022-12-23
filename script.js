const add = function (x,y) {
    return x+y;
}

const subtract = function (x,y) {
    return x-y;
}

const multiply = function (x,y) {
    return x*y;
}

const divide = function (x,y) {
    return x/y;
}

const operate = (operator,x,y) => {
    switch (operator) {
        case 1: add(x,y); break;
        case 2: subtract(x,y); break;   
        case 3: multiply(x,y); break;
        case 4: divide(x,y); break;
    }
}
