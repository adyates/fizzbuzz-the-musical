var fizzBuzzComputer = function(number) {
	var fizz = (number % 3) ? '' : 'Fizz';
	var buzz = (number % 5) ? '' : 'Buzz';
	return [fizz + buzz || number, '\n'].join('');
};

function sodaBee(number) {
	var result = '';
	var i;
	for (i = 1; i <= number; i += 1) {
		result += fizzBuzzComputer(i);
	}
	return result;
}