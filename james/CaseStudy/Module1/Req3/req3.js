let fullName = prompt("Please input full name: ").trim().toLowerCase();
let fullNameArray = Array.from(fullName);

for (let i = 0; i < fullNameArray.length - 1; i++) {
    if (fullNameArray[i] === " " && fullNameArray[i + 1] === " ") {
        for (j = i + 1; j < fullNameArray.length - 1; j++) {
            fullNameArray[j] = fullNameArray[j + 1];
        }
        fullNameArray.pop();
    }
}

fullNameArray[0] = fullNameArray[0].toUpperCase();
for (let i = 1; i < fullNameArray.length; i++) {
    if (fullNameArray[i] === " ") {
        fullNameArray[i + 1] = fullNameArray[i + 1].toUpperCase();
    }
}

fullName = fullNameArray.join("");

let identify = "";
do {
    identify = prompt("Please input identify: ");
} while (isNaN(identify));

let dateOfBirth = "";
do {
    dateOfBirth = prompt("Please input date of birth: ");
    var dateOfBirthArray = dateOfBirth.split("/");
    console.log(dateOfBirthArray);
} while (dateOfBirthArray.length != 3
    || dateOfBirthArray[0].length != 2
    || dateOfBirthArray[1].length != 2
    || dateOfBirthArray[2].length != 4);

let email = "";
do {
    email = prompt("Please input email: ");
} while (email.indexOf("@") === 0
    || email.indexOf("@") === email.length - 1
    || email.indexOf("@") - 1 === email.indexOf(".")
    || email.indexOf("@") + 1 === email.indexOf(".")
    || email.indexOf(".") === email.length - 1);

let address = prompt("Please input address: ");
let typeOfCustomer = prompt("Please input type of Customer (Diamond, Platinum, Gold, Silver, Member): ").toLowerCase();
let discount = parseFloat(prompt("Please input discount (%): "));

let numberOfPeople = 0;
do {
    numberOfPeople = prompt("Please input number of people: ");
} while(isNaN(numberOfPeople) || parseInt(numberOfPeople) < 0)

let rentDays = 0;
do {
    rentDays = parseInt(prompt("Please input rent days: "));
} while(isNaN(rentDays) || parseInt(rentDays) < 0)

let typeOfService = prompt("Please input type of service (Villa, House, Room): ").toLowerCase();
let typeOfRoom = prompt("Please input type of room (VIP, Business, Normal): ").toLowerCase();


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