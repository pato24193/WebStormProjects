let listCustomers = [];
let listEmployees = [];

class Customer {
    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get identify() {
        return this._identify;
    }

    set identify(value) {
        this._identify = value;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get typeOfCustomer() {
        return this._typeOfCustomer;
    }

    set typeOfCustomer(value) {
        this._typeOfCustomer = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get numberOfPeople() {
        return this._numberOfPeople;
    }

    set numberOfPeople(value) {
        this._numberOfPeople = value;
    }

    get rentDays() {
        return this._rentDays;
    }

    set rentDays(value) {
        this._rentDays = value;
    }

    get typeOfService() {
        return this._typeOfService;
    }

    set typeOfService(value) {
        this._typeOfService = value;
    }

    get typeOfRoom() {
        return this._typeOfRoom;
    }

    set typeOfRoom(value) {
        this._typeOfRoom = value;
    }
    
    constructor(fullName, identify, dateOfBirth, email, address,
                typeOfCustomer, discount, numberOfPeople, rentDays, typeOfService, typeOfRoom) {
        this._fullName = fullName;
        this._identify = identify;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._address = address;
        this._typeOfCustomer = typeOfCustomer;
        this._discount = discount;
        this._numberOfPeople = numberOfPeople;
        this._rentDays = rentDays;
        this._typeOfService = typeOfService;
        this._typeOfRoom = typeOfRoom;
    }

    getTotalBills() {

        let costOfService = 0;
        if (this._typeOfService === "villa") {
            costOfService = 500;
        } else if (this._typeOfService === "house") {
            costOfService = 300;
        } else {
            costOfService = 100;
        }

        return costOfService * this._rentDays * (1 - this._discount/100);
    }
}

class Employee {
    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get identify() {
        return this._identify;
    }

    set identify(value) {
        this._identify = value;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    constructor(fullName, identify, dateOfBirth, email, address, position, salary) {
        this._fullName = fullName;
        this._identify = identify;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._address = address;
        this._position = position;
        this._salary = salary;
    }

    getTotalSalary() {
        // -	Trợ cấp 500$ cho Employee nào làm ở vị trí Manager
        // -	Trợ cấp 300$ cho Employee nào làm ở vị trí Sale
        // -	Trợ cấp 200$ cho Employee làm việc ở vị trí Marketing
        let subsidize = 0;
        if (this._position === "manager") {
            subsidize = 500;
        } else if (this._position === "sale") {
            subsidize = 300;
        } else if (this._position === "marketing") {
            subsidize = 200;
        }

        return this._salary + subsidize;
    }
}

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

    let customer = new Customer(fullName, identify, dateOfBirth, email, address,
        typeOfCustomer, discount, numberOfPeople, rentDays, typeOfService, typeOfRoom);

    listCustomers.push(customer);
}

function addNewEmployee() {
    let fullName = prompt("Please input full name: ");
    let identify = prompt("Please input identify: ");
    let dateOfBirth = prompt("Please input date of birth: ");
    let email = prompt("Please input email: ");
    let address = prompt("Please input address: ");
    let position = prompt("Please input position: ");
    let salary = parseFloat(prompt("Please input salary: "));

    let employee = new Employee(fullName, identify, dateOfBirth, email, address, position, salary);

    listEmployees.push(employee);
}

function getListCustomer() {
    let listCus = "";
    for (let i = 0; i < listCustomers.length; i++) {
        listCus += "-----------------------------"
            + "Information Customer [" + (i + 1) + "]: \n"
            + "Full name: " + listCustomers[i].fullName + "\n"
            + "Identify: " + listCustomers[i].identify + "\n"
            + "Date of birth: " + listCustomers[i].dateOfBirth + "\n"
            + "Email: " + listCustomers[i].email + "\n"
            + "Address: " + listCustomers[i].address + "\n"
            + "Type of customer: " + listCustomers[i].typeOfCustomer + "\n"
            + "Discount: " + listCustomers[i].discount + "%\n"
            + "Number of people: " + listCustomers[i].numberOfPeople + "\n"
            + "Rent days: " + listCustomers[i].rentDays + "\n"
            + "Type of service: " + listCustomers[i].typeOfService + "\n"
            + "Type of room: " + listCustomers[i].typeOfRoom + "\n";
    }

    return listCus;
}

function displayCustomers() {
    alert(getListCustomer());
}

function getListEmployee() {
    let listEm = "";
    for (let i = 0; i < listEmployees.length; i++) {
        listEm += "-----------------------------"
            + "Information Employee [" + (i + 1) + "]: \n"
            + "Full name: " + listEmployees[i].fullName + "\n"
            + "Identify: " + listEmployees[i].identify + "\n"
            + "Date of birth: " + listEmployees[i].dateOfBirth + "\n"
            + "Email: " + listEmployees[i].email + "\n"
            + "Address: " + listEmployees[i].address + "\n"
            + "Position: " + listEmployees[i].position + "\n"
            + "Salary: " + listEmployees[i].salary + "\n"
    }

    return listEm;
}

function displayEmployees() {
    alert(getListEmployee());
}

function getSalaryOfEmployee() {
    let listEm = "";
    for (let i = 0; i < listEmployees.length; i++) {
        listEm += "-----------------------------"
            + "Information Employee [" + (i + 1) + "]: \n"
            + "Full name: " + listEmployees[i].fullName + "\n"
            + "Position: " + listEmployees[i].position + "\n"
            + "Total salary: " + listEmployees[i].getTotalSalary() + "\n"
    }

    alert(listEm);
}

function displayTotalPay() {
    let listCus = "";
    for (let i = 0; i < listCustomers.length; i++) {
        listCus += "-----------------------------"
            + "Information Customer [" + (i + 1) + "]: \n"
            + "Full name: " + listCustomers[i].fullName + "\n"
            + "Identify: " + listCustomers[i].identify + "\n"
            + "Date of birth: " + listCustomers[i].dateOfBirth + "\n"
            + "Email: " + listCustomers[i].email + "\n"
            + "Address: " + listCustomers[i].address + "\n"
            + "Type of customer: " + listCustomers[i].typeOfCustomer + "\n"
            + "Discount: " + listCustomers[i].discount + "%\n"
            + "Number of people: " + listCustomers[i].numberOfPeople + "\n"
            + "Rent days: " + listCustomers[i].rentDays + "\n"
            + "Type of service: " + listCustomers[i].typeOfService + "\n"
            + "Type of room: " + listCustomers[i].typeOfRoom + "\n";
    }

    let flag = true;
    let chooseCustomer = parseInt(prompt(getListCustomer()
        + "Choose customer to see total pay (1-" + listCustomers.length + ")")) - 1;

    if (chooseCustomer < 0 || chooseCustomer > listCustomers.length - 1) {
        flag = false;
        alert("Customer failed");
        return;
    }

    alert("Total pay customer " + (chooseCustomer + 1) + ": " + listCustomers[chooseCustomer].getTotalBills());
}

function editCustomer() {
    let flag = true;
    let chooseCustomer = parseInt(prompt("Choose customer (1-" + listCustomers.length + "): ")) - 1;

    if (chooseCustomer < 0 || chooseCustomer > listCustomers.length - 1) {
        flag = false;
        alert("Customer failed");
        return;
    }

    let chooseItem = parseInt(prompt(
        "1. Full name: " + listCustomers[chooseCustomer].fullName + "\n"
        + "2. Identify: " + listCustomers[chooseCustomer].identify + "\n"
        + "3. Date of birth: " + listCustomers[chooseCustomer].dateOfBirth + "\n"
        + "4. Email: " + listCustomers[chooseCustomer].email + "\n"
        + "5. Address: " + listCustomers[chooseCustomer].address + "\n"
        + "6. Type of customer: " + listCustomers[chooseCustomer].typeOfCustomer + "\n"
        + "7. Discount: " + listCustomers[chooseCustomer].discount + "%\n"
        + "8. Number of people: " + listCustomers[chooseCustomer].numberOfPeople + "\n"
        + "9. Rent days: " + listCustomers[chooseCustomer].rentDays + "\n"
        + "10. Type of service: " + listCustomers[chooseCustomer].typeOfService + "\n"
        + "11. Type of room: " + listCustomers[chooseCustomer].typeOfRoom + "\n"
        + "Please choose (1-11): "));

    switch (chooseItem) {
        case 1:
            listCustomers[chooseCustomer].fullName = prompt("Please input full name: ");
            break;
        case 2:
            listCustomers[chooseCustomer].identify = prompt("Please input identify: ");
            break;
        case 3:
            listCustomers[chooseCustomer].dateOfBirth = prompt("Please input date of birth: ");
            break;
        case 4:
            listCustomers[chooseCustomer].email = prompt("Please input email: ");
            break;
        case 5:
            listCustomers[chooseCustomer].address = prompt("Please input address: ");
            break;
        case 6:
            listCustomers[chooseCustomer].typeOfCustomer =
                prompt("Please input type of Customer (Diamond, Platinum, Gold, Silver, Member): ").toLowerCase();
            break;
        case 7:
            listCustomers[chooseCustomer].discount = parseFloat(prompt("Please input discount (%): "));
            break;
        case 8:
            listCustomers[chooseCustomer].numberOfPeople = parseInt(prompt("Please input number of people: "));
            break;
        case 9:
            listCustomers[chooseCustomer].rentDays = parseInt(prompt("Please input rent days: "));
            break;
        case 10:
            listCustomers[chooseCustomer].typeOfService = prompt("Please input type of service (Villa, House, Room): ").toLowerCase();
            break;
        case 11:
            listCustomers[chooseCustomer].typeOfRoom = prompt("Please input type of room (VIP, Business, Normal): ").toLowerCase();
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
    let chooseCustomer = parseInt(prompt("Choose customer (1-" + listCustomers.length + "): ")) - 1;

    if (chooseCustomer < 0 || chooseCustomer > listCustomers.length - 1) {
        flag = false;
        alert("Customer failed");
        return;
    }

    for (let i = chooseCustomer; i < listCustomers.length - 1; i++) {
        listCustomers[i] = listCustomers[i + 1];
    }
    listCustomers.pop();

    displayCustomers();
}

do {
    var choose = prompt(
        "1. Add Name Customer. \n"
        + "2. Display Information Customer. \n"
        + "3. Display total pay of customer. \n"
        + "4. Edit Information Customer. \n"
        + "5. Delete Customer. \n"
        + "6. Add new Employees. \n"
        + "7. Display information Employees. \n"
        + "8. Salary of Employees. \n"
        + "9. Exit. \n"
        + "Please choose 1-9.");

    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomers();
            break;
        case "3":
            displayTotalPay();
            break;
        case "4":
            editCustomer();
            break;
        case "5":
            deleteCustomer();
            break;
        case "6":
            addNewEmployee();
            break;
        case "7":
            displayEmployees();
            break;
        case "8":
            getSalaryOfEmployee();
            break;
    }
} while (choose != 9);