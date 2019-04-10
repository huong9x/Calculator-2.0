const Koa = require('koa');
const calculator = require('./calculatorMiddleware');
const numberFilterMiddleware = require('./numFilterMiddleware');
const calculateMiddleware = require('./calculateMiddleware');

const app = new Koa();

app.use(calculator);
app.use(numberFilterMiddleware);
app.use(calculateMiddleware);

app.listen(4001);
