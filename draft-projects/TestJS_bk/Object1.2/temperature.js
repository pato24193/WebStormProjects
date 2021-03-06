class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    convertF() {
        return this.celsius * 1.8 + 32;
    }

    convertK() {
        return this.celsius + 273.15;
    }
}

temperature = new Temperature(50);

document.writeln("F: " + temperature.convertF() + "<br>");
document.writeln("K: " + temperature.convertK());