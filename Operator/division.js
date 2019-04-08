class Division {
    operate(firstNum, secondNum) {
        if (secondNum == 0) {
            throw new Error('Division by zero');
        } else 
        return firstNum / secondNum
    }
}
module.exports = Division;

