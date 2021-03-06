let arraySource = Array.from("A sentence is a group of words that are put together to mean something.");
function autoChange() {
    let inputTextArea = document.getElementById("inputTextArea");
    let arrayDest = new Array(inputTextArea.value.length);
    for (let i = 0; i < inputTextArea.value.length; i++) {
        arrayDest[i] = arraySource[i];
    }
    console.log(arrayDest);
    inputTextArea.value = arrayDest.join("");
}