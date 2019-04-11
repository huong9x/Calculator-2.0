module.exports = async (context) => {
    
    let result      = context.calculator.do(context.op, context.first, context.second);
    context.body    = {
        result
    }
}