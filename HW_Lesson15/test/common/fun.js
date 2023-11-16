const Calculator = require('../../calculator');
const assert = require('assert');

class Calculation {
    static add(operands, expectedResult) {
        const calculator = new Calculator();
        assert.strictEqual(calculator.add(...operands), expectedResult);
    }

    static multiply(operands, expectedResult) {
        const calculator = new Calculator();
        assert.strictEqual(calculator.multiply(...operands), expectedResult);
    }
    
    static subtraction(operands, expectedResult) {
        const calculator = new Calculator();
        assert.strictEqual(calculator.subtraction(...operands), expectedResult);
    }

    static divide(operands, expectedResult) {
        const calculator = new Calculator();
        assert.strictEqual(calculator.divide(...operands), expectedResult);
    }

    static exponentiation(operands, expectedResult) {
        const calculator = new Calculator();
        assert.strictEqual(calculator.exponentiation(...operands), expectedResult);
    }

}

module.exports = Calculation;