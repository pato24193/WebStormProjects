let sentence = prompt("Please input sentence:");
let sentenceArr = sentence.split(" ");
let count = 0;

for (let i in sentenceArr) {
    if (sentenceArr[i].trim().length > 0) {
        count++;
    }
}

document.write("The number of words: " + count);