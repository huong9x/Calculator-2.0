
const operators = require('./Operator/operators');


class Calculator {
    constructor() {
        this.operators = {
            'add' : new operators.Add,
            'mul' : new operators.Div,
            'pow' : new operators.Pow,
        };
    }
    do(operator, firstNum, secondNum) {
        return this.operators[operator].operate(firstNum, secondNum);
    }
}

module.exports = Calculator;