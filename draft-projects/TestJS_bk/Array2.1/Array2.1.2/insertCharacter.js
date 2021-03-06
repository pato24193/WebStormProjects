function insertCharacter(array, position, character) {
	for (let i = array.length - 1; i >= position; i--) {
		array[i + 1] = array[i];
	}
	
	array[position] = character;
}

function convertNumber() {
	let numberIput = document.getElementById("numberInput").value;
	let numberArray = Array.from(numberIput.toString());
	for (let i = 0; i < numberArray.length - 1; i++) {
		if (numberArray[i] % 2 == 0 && numberArray[i + 1] % 2 == 0) {
			insertCharacter(numberArray, i + 1, "-");
		}
	}
	document.getElementById("numberOutput").value = numberArray.join("");
}