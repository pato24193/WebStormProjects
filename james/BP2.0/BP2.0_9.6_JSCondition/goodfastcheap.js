function choose(str) {
    let good = document.getElementById("good");
    let cheap = document.getElementById("cheap");
    let fast = document.getElementById("fast");

    if (str === "fast" && good.checked == true && cheap.checked == true) {
        cheap.checked = false;
    } else if (str === "cheap" && good.checked == true && fast.checked == true) {
        good.checked = false;
    } else if (str === "good" && cheap.checked == true && fast.checked == true) {
        fast.checked = false;
    }
}