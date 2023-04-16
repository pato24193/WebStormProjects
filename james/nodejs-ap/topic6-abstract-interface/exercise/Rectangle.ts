import {Shape} from "./Shape";
import {Resizable} from "./Resizable";

export class Rectangle extends Shape implements Resizable {
    width: number;
    height: number;

    constructor(name: string,
                width: number,
                height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize(percent: number): void {
        percent /= 100;
        this.width += this.width * percent;
        this.height += this.height * percent;
    }
}
