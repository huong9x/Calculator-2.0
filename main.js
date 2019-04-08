
const calculator = require('./calculator');

var cal = new  calculator();

try {
    console.log(cal.do(process.argv[2], process.argv[3], process.argv[4]));
} catch (error) {
    console.log(error);
}
// console.log(process.argv);
