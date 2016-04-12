process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

describe('when mocha and chai are set up', function() {
    it('basic test', function(done) {
        function add(num1, num2) {
          return num1 + num2;
        }
        add(1, 1).should.equal(2);
        done();
    });
});