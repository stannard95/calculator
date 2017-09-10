var choice = prompt('What operator would you like to do?\n\
	[a] for addition\n\
	[s] for subtraction\n\
	[m] for multiplication\n\
	[d] for division\n\
	[r] to get the square root of a number\n\
	[p] to power your number by another number');

var firstNumber = parseFloat(prompt('What is your first number?'));

if (choice !== 'r') {
	var secondNumber = parseFloat(prompt('What is your second number?'));
}

if (choice === 'a') {
	alert(firstNumber + secondNumber);

} else if (choice === 's') {
	alert(firstNumber - secondNumber);

} else if (choice === 'm') {
	alert(firstNumber * secondNumber);

} else if (choice === 'd') {
	alert(firstNumber / secondNumber);

} else if (choice === 'r') {
	alert(Math.sqrt(firstNumber));

} else if (choice === 'p') {
	alert(firstNumber ** secondNumber);

}  else  {
	alert('Invalid choice, refresh the page to try again.');
}
