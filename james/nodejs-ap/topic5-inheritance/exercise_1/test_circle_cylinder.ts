import {Circle} from "./circle";
import {Cylinder} from "./cylinder";

let circle = new Circle(5, 'red')
let cylinder = new Cylinder(8, 'blue', 2);

circle.calculateArea();
console.log(circle.area);

console.log(cylinder.getVolume());
