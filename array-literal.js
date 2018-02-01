//create an array and assign it values.
var colors = new Array	('white', 
						'black', 
						'beige');
colors.push('purple');
//show the first item from the array.
var el = document.getElementById('colors');
el.textContent = colors[2];