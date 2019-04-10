module.exports = async (context, next) => {
    const firstNum  = context.query.firstNum;
    const secondNum = context.query.secondNum;
    const op        = context.query.op;
    if (firstNum, secondNum, op && (isNaN(firstNum) || isNaN(secondNum))) {
        context.first       = firstNum;
        context.second      = secondNum;
        context.op          = op;
        await next();
    } else {
        context.body = {
            Calculator : 'Missing or corrupt elements!'
        }
    }
    
};
