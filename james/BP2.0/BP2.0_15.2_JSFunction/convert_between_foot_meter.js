function footToMeter(foot) {
    return 0.305 * foot;
}

function meterToFoot(meter) {
    return 3.279 * meter;
}

let foot = prompt("Please input foot: ");
let meter = prompt("Please input meter: ");
document.writeln("Foot -> meter: " + footToMeter(foot) + "<br>");
document.writeln("Meter -> foot: " + meterToFoot(meter) + "<br>");