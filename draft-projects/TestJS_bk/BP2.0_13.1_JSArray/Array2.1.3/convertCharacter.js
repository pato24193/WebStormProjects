let str = prompt("Please input a string:");
let strArr = Array.from(str);

for (let i in strArr) {
    if (strArr[i] >= 'a' && strArr[i] <= 'z') {
        strArr[i] = strArr[i].toUpperCase();
    } else {
        strArr[i] = strArr[i].toLowerCase();
    }
}

document.write(strArr.join(""));