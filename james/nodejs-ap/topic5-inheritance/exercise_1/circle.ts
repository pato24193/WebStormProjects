export class Circle {
    public radius: number;
    public color: string;
    public area: number;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    calculateArea(): void {
        this.area = Math.PI * this.radius * this.radius;
    }
}
