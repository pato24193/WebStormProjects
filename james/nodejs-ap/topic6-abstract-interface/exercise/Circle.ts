import {Shape} from "./Shape";
import {Resizable} from "./Resizable";

export class Circle extends Shape implements Resizable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(percent: number): void {
        percent /= 100;
        this.radius += this.radius * percent;
    }
}
