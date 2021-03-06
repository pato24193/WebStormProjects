// Bài 8: Game đoán số
// Nâng cấp game "Hãy thử đoán xem!"
// 1. Thiết kế giao diện: Giao diện chỉ gồm 1 Button "Chơi": cho phép người dùng bắt đầu chơi hoặc chơi lại
// 2. Mô tả ứng dụng: Khi người dùng nhấn vào button "Chơi"
//     Ứng dụng hiển thị cửa sổ prompt cho phép người dùng nhập vào muốn đoán trong khoảng nào
//     Ứng dụng chọn ra số ngẫu nhiên trong khoảng mà ngườI dùng chọn
//     Ứng dụng hiển thị cửa số prompt cho người dùng nhập giá trị mà người dùng đoán
//     Ứng dụng lấy kết quả và so sánh với giá trị ngẫu nhiên
//         Nếu bằng thì hiển thị thông báo chúc mừng và kết thúc lượt chơi
//         Nếu lớn hơn hoặc bé thua thì hiển thị thông báo lớn hơn hay bé thua và cho phép người dùng lựa chọn lại
// Chú ý: Người dùng chỉ được lựa chọn tối đa ba lần

let countPlayAgain = 0;
let randomNumber = 0;

function guess() {
    let btnPlay = document.getElementById("btnPlay");
    if (countPlayAgain === 0) {
        let scope = prompt("Please input scope of number (start-end): ");
        let arrayScope = scope.split("-");
        let startNumber = parseInt(arrayScope[0]);
        let endNumber = parseInt(arrayScope[1]);
        randomNumber = Math.floor((Math.random() * endNumber) + startNumber);
        console.log(randomNumber);
    }

    if (countPlayAgain <= 2) {
        let number = parseInt(prompt("Please guess number: "));

        if (number === randomNumber) {
            btnPlay.innerText = "Play";
            alert("Congratulation!");
        } else {
            btnPlay.innerText = "Play again";
            countPlayAgain++;

            if (countPlayAgain === 3) {
                countPlayAgain = 0;
                btnPlay.innerText = "Play";
            }
        }
    }

}