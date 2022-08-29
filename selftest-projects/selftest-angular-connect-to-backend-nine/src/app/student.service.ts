import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API_URL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) {
  }

  // get data by call API
  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + '/' + studentId);
  }

  // get data by call API
  findAll(): Observable<Student[]> {
    // const studentList = new Array();
    // studentList.push(new Student(12312, 'Nguyen Van A', '2001-02-23', 1));
    // studentList.push(new Student(6546, 'Nguyen Thi D', '2002-02-24', 0));
    // studentList.push(new Student(2343, 'Nguyen Thi B', '2003-02-25', 0));
    // studentList.push(new Student(7776, 'Nguyen Van C', '2004-02-26', 1));

    // return studentList;
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  save(studentObj: Student): Observable<void> {
    console.log(studentObj);
    return this.httpClient.patch<void>(this.API_URL + '/' + studentObj.id, studentObj);
  }
}
