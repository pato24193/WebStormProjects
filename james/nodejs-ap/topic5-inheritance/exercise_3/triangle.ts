import {Shape} from "./shape";

export class Triangle extends Shape {
    public side1: number;
    public side2: number;
    public side3: number;

    constructor(side1: number, side2: number, side3: number) {
        super('', '');
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getArea(): number {
        const semiPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(semiPerimeter
            * (semiPerimeter - this.side1)
            * (semiPerimeter - this.side2)
            * (semiPerimeter - this.side3));
    }

    getPerimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }
}
