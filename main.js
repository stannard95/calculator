var choice = prompt('What operator would you like to do?\n\
	[a] for addition\n\
	[s] for subtraction\n\
	[m] for multiplication\n\
	[d] for division\n\
	[r] to square a number\n\
	[p] to power your number by another number');

var firstNumber = parseFloat(prompt('What is your first number?'));

if (choice !== 'root') {
	var secondNumber = parseFloat(prompt('What is your second number?'));

}

if (choice === '+') {
	alert(firstNumber + secondNumber);

} else if (choice === '-') {
	alert(firstNumber - secondNumber);

} else if (choice === '*') {
	alert(firstNumber * secondNumber);

} else if (choice === '/') {
	alert(firstNumber / secondNumber);

} else if (choice === 'power') {
	alert(firstNumber ** secondNumber);

} else if (choice === 'root') {
	alert(Math.sqrt(firstNumber));

} else  {
	alert('Invalid choice, refresh the page to try again.');
}
