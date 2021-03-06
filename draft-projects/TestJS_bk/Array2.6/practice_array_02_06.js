let len = parseInt(prompt("Please input length of character array:"));
let charArray = new Array(len);

for (let i = 0; i < charArray.length; i++) {
    charArray[i] = prompt("Please input character " + i + " :");
}

document.write("Before convert:" + charArray + "<br>");
for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "-") {
        charArray[i] = "_";
    }
}
document.write("After convert:" + charArray + "<br>");