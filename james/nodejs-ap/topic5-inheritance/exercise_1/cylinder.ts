import {Circle} from "./circle";

export class Cylinder extends Circle {
    public height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height;
    }

    getVolume() {
        return Math.PI * this.radius * this.radius * this.height;
    }
}
