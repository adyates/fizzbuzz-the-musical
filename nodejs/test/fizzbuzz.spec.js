var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;

describe.skip('Testing framework', function() {
	it('can read the output file', function() {
		var data = fs.readFileSync('../baseList.txt', {encoding: ''});
		expect(data.length).to.equal(413);
	});
});


describe('FizzBuzzing', function() {
	it('can compute FizzBuzz properly', function() {
		var data = fs.readFileSync('../baseList.txt', {encoding: ''});
		expect(sodaBee(100)).to.equal(String(data));
	});
});