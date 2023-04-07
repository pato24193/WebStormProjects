import {Employee} from "./employee";

class EmployeeManagement {
    public static employees: Employee[] = [
        new Employee(232, 'Nguyen Van', 'An',
            '2000-08-07', 'Ha Noi', 'nhan vien'),
        new Employee(86, 'Le Van', 'Binh',
            '2000-04-23', 'Da Nang', 'truong phong'),
        new Employee(123, 'Ha', 'An',
            '1998-12-04', 'Da Nang', 'ke toan'),
    ];

    showList(): void {
        for (let e of EmployeeManagement.employees)  {
            console.log(e);
        }
    }

    addNew(employee: Employee): void {
        EmployeeManagement.employees.push(employee);
    }

    showDetail(id: number): Employee {
        return EmployeeManagement.employees.find(e => e.id == id);
    }

    release(id: number): void {
        const eIndex = EmployeeManagement.employees.findIndex(e => e.id == id);
        EmployeeManagement.employees.splice(eIndex, 1);
    }

    updateInfo(employee: Employee): void {
        const eIndex = EmployeeManagement.employees.findIndex(e => e.id == employee.id);
        EmployeeManagement.employees[eIndex] = employee;
        console.log('---------------');
    }
}

let employeeManagement = new EmployeeManagement();

// 1. Hien thi danh sach
// employeeManagement.showList();

// 2. Them mot nhan su moi
// employeeManagement.addNew(new Employee(342, 'Do', 'Manh',
//     '1999-01-23', 'Da Nang', 'marketing'));
// employeeManagement.showList();

// 3. Xem chi tiet thong tin nhan su
// console.log(employeeManagement.showDetail(123));

// 4. Xoa mot nhan su
// employeeManagement.release(123);
// employeeManagement.showList();

// 5. Chinh sua thong tin nhan su
let id = 86;
let firstName = 'Le Thai'
let lastName = 'Toan'
let dateOfBirth = '2001-09-08'
let address = 'Ho Chi Minh'
let position = 'Lap trinh vien'

employeeManagement.updateInfo(new Employee(id, firstName, lastName, dateOfBirth, address, position));
employeeManagement.showList();
