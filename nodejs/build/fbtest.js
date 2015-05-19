var fizzBuzzComputer = function(number) {
	var fizz = (number % 3) ? '' : 'Fizz';
	var buzz = (number % 5) ? '' : 'Buzz';
	return [fizz + buzz || number, '\n'].join('');
};

function sodaBee(number) {
	var result = '';
	for (var i = 1; i <= number; i += 1) {
		result += fizzBuzzComputer(i);
	}
	return result;
}
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