const Calculator = require('./calculator');
const cal = new  Calculator();

module.exports = async (context, next) => {
    context.calculator = cal;
    await next();
}
