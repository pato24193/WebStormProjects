let physicsGrade = prompt("Please input physics grade:");
let chemistryGrade = prompt("Please input chemistry grade:");
let biologyGrade = prompt("Please input biology grade:");

let total = parseInt(physicsGrade) + parseInt(chemistryGrade) + parseInt(biologyGrade);

document.writeln("Average grade: " + (total/3) + "<br>");
document.writeln("Total grade: " + total + "<br>");