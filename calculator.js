
const operators = require('./Operator/operators');


class Calculator {
    constructor() {
        this.operators = {
            '+' : new operators.Add,
            '/' : new operators.Div,
            '^' : new operators.Pow,
        };
    }
    do(operator, firstNum, secondNum) {
        if (!this.operators.hasOwnProperty(operator)) {
            throw new Error('Not Supported, Comming soon!');
        } else
        return this.operators[operator].operate(firstNum, secondNum)
    }
}

module.exports = Calculator;