function countDay() {
    let month = parseInt(document.getElementById("month").value);
    let result = document.getElementById("result");
    let text = "";

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 8:
        case 10:
        case 12:
            text = "Tháng " + month + " có 31 ngày";
            break;
        case 2:
            text = "Tháng " + month + " có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            text = "Tháng " + month + " có 30 ngày";
            break;
    }

    result.innerText = text;
}