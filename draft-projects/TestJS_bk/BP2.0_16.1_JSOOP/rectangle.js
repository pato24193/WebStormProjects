class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    getArea() {
        return this.width * this.height;
    }
}

rectangle = new Rectangle(50, 100);

recCanvas = document.getElementById("recCanvas");
recCanvas.width = rectangle.width;
recCanvas.height = rectangle.height;

rectangle.width = 20;
rectangle.height = 30;

document.writeln("<br>");
document.writeln("Perimeter: " + rectangle.getPerimeter() + "<br>");
document.writeln("Area: " + rectangle.getArea());