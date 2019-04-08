const Koa = require('koa');
const app = new Koa();

const Calculator = require('./calculator');
const cal = new  Calculator();

const numberFilterMiddleware = async (context, next) => {
    const firstNum  = context.query.firstNum;
    const secondNum = context.query.secondNum;
    const op        = context.query.op;
    if (firstNum, secondNum, op) {
        await next();
    } else {
        context.body = {
            Calculator : 'Missing or corrupt elements!'
        }
    }
    
};

const opFilterMiddleware = async (context) => {
    const firstNum  = parseInt(context.query.firstNum);
    const secondNum = parseInt(context.query.secondNum);
    const op        = context.query.op;

    if (!cal.operators.hasOwnProperty(op)) {
        context.body    = {
            Result : 'Not Supported, Comming soon!'
        }
    } else {
        let result      = cal.do(op, firstNum, secondNum);
        context.body    = {
            Result : firstNum + ' ' + op + ' ' + secondNum + ' = ' + result
        }
    }
}

app.use(numberFilterMiddleware);
app.use(opFilterMiddleware);

app.listen(4000);

