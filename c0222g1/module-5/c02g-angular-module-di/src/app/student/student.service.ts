import {Injectable} from '@angular/core';
import {Student} from './student';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
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
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  save(student: Student): Observable<void> {
    return this.httpClient.patch<void>(
      this.API_URL + '/' + student.id, student);
  }
}
