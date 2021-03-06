class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        this.weight--;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    say(message) {
        console.log(this.name + ": " + message);
    }

    eat(apple) {
        if (apple.getWeight() > 0) {
            this.weight++;
            apple.decrease();
        }
    }

    checkApple(apple) {
        console.log(this.name + ": weight of apple is " + apple.getWeight());
    }
}
apple = new Apple();
adam = new Human("Adam", "man", 65);
eva = new Human("Eva", "woman", 45);

while (apple.getWeight() > 0) {
    adam.eat(apple);
    adam.checkApple(apple);
    eva.eat(apple);
    eva.checkApple(apple);
}

if (apple.getWeight() == 0) {
    adam.say("The apple is over.");
    eva.say("The apple is over.");
}