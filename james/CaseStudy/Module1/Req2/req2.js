let fullName = "Nguyen Vu Thanh Tien";
let identify = "201672674";
let dateOfBirth = "24/01/1993";
let email = "tien.nguyen@codegym.vn";
let address = "Da Nang"
let typeOfCustomer = "diamond";
let discount = 5;
let numberOfPeople = 2;
let rentDays = 7;
let typeOfService = "Villa";
let typeOfRoom = "VIP";

let costOfService = 0;
if (typeOfService === "villa") {
    costOfService = 500;
} else if (typeOfService === "house") {
    costOfService = 300;
} else {
    costOfService = 100;
}


do {

    let choose = parseInt(prompt(
        "1. Show Information Customer. \n"
                + "2. Edit Information Customer. \n"
                + "3. Show the amount to be paid after discount. \n"
                + "Please choose (1, 2, 3): "));

    switch (choose) {
        case 1:
            alert("Information Customer: \n"
                + "Full name: " + fullName + "\n"
                + "Identify: " + identify + "\n"
                + "Date of birth: " + dateOfBirth + "\n"
                + "Email: " + email + "\n"
                + "Address: " + address + "\n"
                + "Type of customer: " + typeOfCustomer + "\n"
                + "Discount: " + discount + "%\n"
                + "Number of people: " + numberOfPeople + "\n"
                + "Rent days: " + rentDays + "\n"
                + "Type of service: " + typeOfService + "\n"
                + "Type of room: " + typeOfRoom + "\n");
            break;
        case 2:
            let chooseItem = parseInt(prompt(
                "1. Full name: " + fullName + "\n"
                + "2. Identify: " + identify + "\n"
                + "3. Date of birth: " + dateOfBirth + "\n"
                + "4. Email: " + email + "\n"
                + "5. Address: " + address + "\n"
                + "6. Type of customer: " + typeOfCustomer + "\n"
                + "7. Discount: " + discount + "%\n"
                + "8. Number of people: " + numberOfPeople + "\n"
                + "9. Rent days: " + rentDays + "\n"
                + "10. Type of service: " + typeOfService + "\n"
                + "11. Type of room: " + typeOfRoom + "\n"
                + "Please choose (1-11): "));
            
            switch (chooseItem) {
                case 1:
                    fullName = prompt("Please input full name: ");
                    break;
                case 2:
                    identify = prompt("Please input identify: ");
                    break;
                case 3:
                    dateOfBirth = prompt("Please input date of birth: ");
                    break;
                case 4:
                    email = prompt("Please input email: ");
                    break;
                case 5:
                    address = prompt("Please input address: ");
                    break;
                case 6:
                    typeOfCustomer = prompt("Please input type of Customer (Diamond, Platinum, Gold, Silver, Member): ").toLowerCase();
                    break;
                case 7:
                    discount = parseFloat(prompt("Please input discount (%): "));
                    break;
                case 8:
                    numberOfPeople = parseInt(prompt("Please input number of people: "));
                    break;
                case 9:
                    rentDays = parseInt(prompt("Please input rent days: "));
                    break;
                case 10:
                    typeOfService = prompt("Please input type of service (Villa, House, Room): ").toLowerCase();
                    break;
                case 11:
                    typeOfRoom = prompt("Please input type of room (VIP, Business, Normal): ").toLowerCase();
                    break;
                default:
                    alert("Failed");
                    break;
            }
            break;
        case 3:
            let discountByAddress = 0;

            if (address === "Da Nang") {
                discountByAddress = 20;
            } else if (address === "Hue") {
                discountByAddress = 10;
            } else if (address === "Quang Nam") {
                discountByAddress = 5;
            }

            let discountByTime = 0;

            if (rentDays > 7) {
                discountByTime = 30;
            } else if (rentDays >= 5 && rentDays <= 7) {
                discountByTime = 20;
            } else if (rentDays >= 2 && rentDays <= 4) {
                discountByTime = 10;
            }

            let discountByCustomer = 0;
            if (typeOfCustomer === "diamond") {
                discountByCustomer = 15;
            } else if (typeOfService === "platinum") {
                discountByCustomer = 10;
            } else if (typeOfService === "gold") {
                discountByCustomer = 5;
            } else if (typeOfService === "silver") {
                discountByCustomer = 2;
            }

            let totalOfDiscount = discountByAddress + discountByTime + discountByCustomer;

            let costOfService = 0;
            if (typeOfService === "villa") {
                costOfService = 500;
            } else if (typeOfService === "house") {
                costOfService = 300;
            } else {
                costOfService = 100;
            }

            let totalBills = costOfService * rentDays - totalOfDiscount;
            alert("The amount to be paid after discount: " + totalBills);

            break;
        default:
            alert("Please choose 1, 2 or 3.");
            break;
    }
} while (true);