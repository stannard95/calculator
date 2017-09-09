var choice = prompt('What operator would you like to do?');

var firstNumber = prompt('What is your first number?');
firstNumber = parseFloat(firstNumber);
var secondNumber = prompt('What is your second number?');
secondNumber = parseFloat(secondNumber);

if (choice === '+') {
	alert(firstNumber + secondNumber);
} else if (choice === '-') {
	alert(firstNumber - secondNumber);
}
else if (choice === '*') {
	alert(firstNumber * secondNumber);
}
else if (choice === '/') {
	alert(firstNumber / secondNumber);
}

else  {
	alert('Invalid choice, refresh the page to try again.');
}
