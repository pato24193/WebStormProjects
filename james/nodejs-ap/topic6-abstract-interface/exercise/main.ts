import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let sizeRandom = parseInt(String(Math.random() * 100 + 1));
console.log(`Size: ${sizeRandom}`);

let circle = new Circle('hinh tron', 5);
console.log('Before: ');
console.log(circle);
circle.resize(sizeRandom);
console.log('After: ');
console.log(circle);

let rectangle = new Rectangle('hinh chu nhat',5, 2);
console.log('Before: ');
console.log(rectangle);
rectangle.resize(sizeRandom);
console.log('After: ');
console.log(rectangle);

let square = new Square('hinh vuong', 7);
console.log('Before: ');
console.log(square);
square.resize(sizeRandom);
console.log('After: ');
console.log(square);
