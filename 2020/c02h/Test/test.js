class SingletonClass {
    constructor(name = "", age = 0) {
        if (!this.constructor.instance) {
            this.constructor.instance = this;
            this.name = name;
            this.age = age;
        }

        return this.constructor.instance;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

const instanceOne = new SingletonClass("One", 25);
const instanceTwo = new SingletonClass("Two", 44);

console.log("Name of instanceOne is " + instanceOne.getName());
console.log("Name of instanceTwo is " + instanceTwo.getName());

