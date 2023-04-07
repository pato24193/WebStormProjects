export class Employee {
    public id: number;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: string;
    public address: string;
    public position: string;

    constructor(id: number, firstName: string, lastName: string, dateOfBirth: string, address: string, position: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.position = position;
    }
}
