export class Student {
  public id: number;
  public name: string;
  public dateOfBirth: string;
  public gender: number;

  constructor(id: number, name: string, dateOfBirth: string, gender: number) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
  }
}
