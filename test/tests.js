var assert = require('assert');
var calc = require('../calc');

describe('Tests', function() {
    describe('function plus()', function() {
        it('Should properly plus 1 + 1 = 2', function() {
            assert.equal(calc.plus(1, 1), 5);
        });
    });

    describe('function minus()', function() {
        it('Should properly minus 1 - 1 = 0', function() {
            assert.equal(calc.minus(1, 1), 0);
        });
    });

    describe('function multiply()', function() {
        it('Should properly multiply 1 * 1 = 1', function() {
            assert.equal(calc.multiply(1, 1), 1);
        });
    });

    describe('function divide()', function() {
        it('Should properly divide 1 / 1 = 1', function() {
            assert.equal(calc.divide(1, 1), 1);
        });
    });
});
