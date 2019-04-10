module.exports = async (context, next) => {
    const firstNum  = parseInt(context.query.firstNum);
    const secondNum = parseInt(context.query.secondNum);
    const op        = context.query.op;
    if (firstNum, secondNum, op) {
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
