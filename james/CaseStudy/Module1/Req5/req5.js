let arrNameCustomers = [];

function addNewCustomer() {
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

    arrNameCustomers.push([fullName, identify, dateOfBirth, email, address,
        typeOfCustomer, discount, numberOfPeople, rentDays, typeOfService, typeOfRoom]);
}

function displayCustomers() {
    let listCus = "";
    for (let i = 0; i < arrNameCustomers.length; i++) {
        listCus += "-----------------------------"
            + "Information Customer [" + (i + 1) + "]: \n"
            +"Full name: " + arrNameCustomers[i][0] + "\n"
            + "Identify: " + arrNameCustomers[i][1] + "\n"
            + "Date of birth: " + arrNameCustomers[i][2] + "\n"
            + "Email: " + arrNameCustomers[i][3] + "\n"
            + "Address: " + arrNameCustomers[i][4] + "\n"
            + "Type of customer: " + arrNameCustomers[i][5] + "\n"
            + "Discount: " + arrNameCustomers[i][6] + "%\n"
            + "Number of people: " + arrNameCustomers[i][7] + "\n"
            + "Rent days: " + arrNameCustomers[i][8] + "\n"
            + "Type of service: " + arrNameCustomers[i][9] + "\n"
            + "Type of room: " + arrNameCustomers[i][10] + "\n";
    }
    alert(listCus);
}

function editCustomer() {
    let flag = true;
    let chooseCustomer = parseInt(prompt("Choose customer (1-" + arrNameCustomers.length + "): ")) - 1;

    if (chooseCustomer < 0 || chooseCustomer > arrNameCustomers.length - 1) {
        flag = false;
        alert("Customer failed");
        return;
    }

    let chooseItem = parseInt(prompt(
        "1. Full name: " + arrNameCustomers[chooseCustomer][0] + "\n"
        + "2. Identify: " + arrNameCustomers[chooseCustomer][1]  + "\n"
        + "3. Date of birth: " + arrNameCustomers[chooseCustomer][2]  + "\n"
        + "4. Email: " + arrNameCustomers[chooseCustomer][3]  + "\n"
        + "5. Address: " + arrNameCustomers[chooseCustomer][4]  + "\n"
        + "6. Type of customer: " + arrNameCustomers[chooseCustomer][5]  + "\n"
        + "7. Discount: " + arrNameCustomers[chooseCustomer][6]  + "%\n"
        + "8. Number of people: " + arrNameCustomers[chooseCustomer][7]  + "\n"
        + "9. Rent days: " + arrNameCustomers[chooseCustomer][8]  + "\n"
        + "10. Type of service: " + arrNameCustomers[chooseCustomer][9]  + "\n"
        + "11. Type of room: " + arrNameCustomers[chooseCustomer][10]  + "\n"
        + "Please choose (1-11): "));

    switch (chooseItem) {
        case 1:
            arrNameCustomers[chooseCustomer][0] = prompt("Please input full name: ");
            break;
        case 2:
            arrNameCustomers[chooseCustomer][1] = prompt("Please input identify: ");
            break;
        case 3:
            arrNameCustomers[chooseCustomer][2] = prompt("Please input date of birth: ");
            break;
        case 4:
            arrNameCustomers[chooseCustomer][3] = prompt("Please input email: ");
            break;
        case 5:
            arrNameCustomers[chooseCustomer][4] = prompt("Please input address: ");
            break;
        case 6:
            arrNameCustomers[chooseCustomer][5] = prompt("Please input type of Customer (Diamond, Platinum, Gold, Silver, Member): ").toLowerCase();
            break;
        case 7:
            arrNameCustomers[chooseCustomer][6] = parseFloat(prompt("Please input discount (%): "));
            break;
        case 8:
            arrNameCustomers[chooseCustomer][7] = parseInt(prompt("Please input number of people: "));
            break;
        case 9:
            arrNameCustomers[chooseCustomer][8] = parseInt(prompt("Please input rent days: "));
            break;
        case 10:
            arrNameCustomers[chooseCustomer][9] = prompt("Please input type of service (Villa, House, Room): ").toLowerCase();
            break;
        case 11:
            arrNameCustomers[chooseCustomer][10] = prompt("Please input type of room (VIP, Business, Normal): ").toLowerCase();
            break;
        default:
            flag = false;
            alert("Failed");
            break;
    }

    displayCustomers();
}

function deleteCustomer() {
    let flag = true;
    let chooseCustomer = parseInt(prompt("Choose customer (1-" + arrNameCustomers.length + "): ")) - 1;

    if (chooseCustomer < 0 || chooseCustomer > arrNameCustomers.length - 1) {
        flag = false;
        alert("Customer failed");
        return;
    }

    for (let i = chooseCustomer; i < arrNameCustomers.length - 1; i++) {
        arrNameCustomers[i] = arrNameCustomers[i + 1];
    }
    arrNameCustomers.pop();

    displayCustomers();
}

do {
    var choose = prompt(
        "1. Add Name Customer. \n"
        + "2. Display Information Customer. \n"
        + "3. Edit Information Customer. \n"
        + "4. Delete Customer. \n"
        + "5. Exit. \n"
        + "Please choose 1-5.");

    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomers();
            break;
        case "3":
            editCustomer();
            break;
        case "4":
            deleteCustomer();
            break;
    }
} while (choose != 5);