// load image again after key down
function loadImage(top, left) {
    return '<img ' +
        ' src="pikachu.png"' +
        ' style="top: '+top+'px; left:'+left+'px;position:absolute;" />';
}

// Initial
let topCar = 20;
let leftCar = 20;
let speed = 20;
car = document.getElementById("car");
car.innerHTML = loadImage(topCar, leftCar);

// Catch event arrow left, right, up, down
document.onkeydown = function(e) {
    let car = document.getElementById("car");

    switch (e.keyCode) {
        case 37:
            // alert('left');
            leftCar -= speed;
            car.innerHTML = loadImage(topCar, leftCar);
            break;
        case 38:
            // alert('up');
            topCar -= speed;
            car.innerHTML = loadImage(topCar, leftCar);
            break;
        case 39:
            // alert('right');
            leftCar += speed;
            car.innerHTML = loadImage(topCar, leftCar);
            break;
        case 40:
            // alert('down');
            topCar += speed;
            car.innerHTML = loadImage(topCar, leftCar);
            break;
    }
};


