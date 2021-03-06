function convertMoney() {
    let money = document.formMoney.money.value;
    let fromCur = document.formMoney.fromCur.value;
    let toCur = document.formMoney.toCur.value;
    let result = 0;
    const convertValue = 23.20550;

    if (fromCur === "vn" && toCur === "usd") {
        result = money / convertValue;
    }

    document.getElementById("result").innerHTML = "Result:" + result;
}