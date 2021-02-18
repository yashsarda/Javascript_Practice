const operations = {

    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    pow: Math.pow
};

function operation(operator, operand1, operand2) {

    if(typeof operations[operator] === "function") {
        return operations[operator](operand1, operand2);
    }

    else throw "unknown operator";
}

console.log(operation("add", "hello", operation("add","", "world")));
