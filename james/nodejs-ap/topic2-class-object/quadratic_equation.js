class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        const delta = this.getDiscriminant();
        return delta >= 0 ? ((-this.b + Math.sqrt(delta)) / (2 * this.a)) : 0;
    }

    getRoot2() {
        const delta = this.getDiscriminant();
        return delta >= 0 ? ((-this.b - Math.sqrt(delta)) / (2 * this.a)) : 0;
    }
}

let a = prompt('Input a');
let b = prompt('Input b');
let c = prompt('Input c');

let quadraticEquation = new QuadraticEquation(a, b, c);

const delta = quadraticEquation.getDiscriminant();
if (delta < 0 ) {
    console.log('The equation has no roots');
} else if (delta === 0) {
    console.log(`x = ${quadraticEquation.getRoot1()}`);
} else {
    console.log(`x1 = ${quadraticEquation.getRoot1()} & x2 = ${quadraticEquation.getRoot2()}`)
}
