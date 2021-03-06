let arrNameCustomers = [];

do {
    let choose = prompt(
        "1. Add Name Customer. \n"
        + "2. Delete Customer. \n"
        + "Please choose 1 or 2.");

    switch (choose) {
        case "1":
            let n = prompt("Please input number of customers to add: ");

            for (let i = 0; i < n; i++) {
                let name = prompt("Please input customer name " + (i + 1));
                arrNameCustomers.push(name);
            }
            break;

        case "2":
            let name = prompt("Please input customer name to delete: ");
            let iCus = arrNameCustomers.indexOf(name);

            if (iCus >= 0) {
                for (let i = iCus; i < arrNameCustomers.length - 1; i++) {
                    arrNameCustomers[i] = arrNameCustomers[i + 1];
                }

                arrNameCustomers.pop();
                arrNameCustomers.sort();

                alert("List customer: " + arrNameCustomers);
            } else {
                alert("Customer doesn't exist.")
            }
            break;
    }
} while (true);