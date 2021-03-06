function isPalindrome(str) {
    let arrStr = Array.from(str);

    for (let i = 0; i < arrStr.length/2; i++) {
        if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let str = "redder";
alert(isPalindrome(str));