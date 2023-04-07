import {Point2D} from "./point2d";

export class Point3D extends Point2D {
    public z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    getZ(): number {
        return this.z;
    }

    setZ(z: number): void {
        this.z = z;
    }

    getXYZ(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    setXYZ(x: number, y: number, z: number): void {
        this.setXY(x, y);
        this.z = z;
    }
}
