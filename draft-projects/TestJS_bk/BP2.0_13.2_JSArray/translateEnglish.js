
let english = ["hello", "array", "tutorial", "math"];
let vietnamese = ["xin chao", "mang", "huong dan", "toan hoc"];

function translateEnglish() {
    let inputStr = document.getElementById("inputStr");
    let outputStr = document.getElementById("outputStr");

    for (let i in english) {
        if (english[i] === inputStr.value) {
            outputStr.value = vietnamese[i];
            return;
        }
    }

    outputStr.value = "N/A";
}
