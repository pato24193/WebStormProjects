import {Point2D} from "./point2d";
import {Point3D} from "./point3d";

let point2D = new Point2D(3, 5);
let point3D = new Point3D(1, 2, 3);

point2D.setXY(9, 12);
console.log(point2D.getXY());

point3D.setXYZ(10, 54, 12);
console.log(point3D.getXYZ());
