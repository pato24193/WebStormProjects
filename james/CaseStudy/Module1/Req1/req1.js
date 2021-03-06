let fullName = prompt("Please input full name: ");
let identify = prompt("Please input identify: ");
let dateOfBirth = prompt("Please input date of birth: ");
let email = prompt("Please input email: ");
let address = prompt("Please input address: ");
let typeOfCustomer = prompt("Please input type of Customer (Diamond, Platinum, Gold, Silver, Member): ").toLowerCase();
let discount = parseFloat(prompt("Please input discount (%): "));
let numberOfPeople = parseInt(prompt("Please input number of people: "));
let rentDays = parseInt(prompt("Please input rent days: "));
let typeOfService = prompt("Please input type of service (Villa, House, Room): ").toLowerCase();
let typeOfRoom = prompt("Please input type of room (VIP, Business, Normal): ").toLowerCase();

let costOfService = 0;
if (typeOfService === "villa") {
    costOfService = 500;
} else if (typeOfService === "house") {
    costOfService = 300;
} else {
    costOfService = 100;
}

let totalBills = costOfService * rentDays * (1 - discount/100);

document.writeln("Full name: " + fullName + "<br>");
document.writeln("Identify: " + identify + "<br>");
document.writeln("Date of birth: " + dateOfBirth + "<br>");
document.writeln("Email: " + email + "<br>");
document.writeln("Address: " + address + "<br>");
document.writeln("Type of customer: " + typeOfCustomer + "<br>");
document.writeln("Discount: " + discount + "%<br>");
document.writeln("Number of people: " + numberOfPeople + "<br>");
document.writeln("Rent days: " + rentDays + "<br>");
document.writeln("Type of service: " + typeOfService + "<br>");
document.writeln("Type of room: " + typeOfRoom + "<br>");
document.writeln("Total bills: " + totalBills + "$");