let str1 = prompt("Please input string 1:");
let str2 = prompt("Please input string 2:");

if (str1.localeCompare(str2) === 0) {
    document.write("Two strings are same.");
} else {
    document.write("Two strings are not same.")
}