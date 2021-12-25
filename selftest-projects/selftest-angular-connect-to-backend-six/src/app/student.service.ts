import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiURL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) {

  }

  // get data by call API
  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.apiURL + '/' + studentId);
  }

  // get data by call API
  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiURL);
  }

  save(studentObj: Student): Observable<void> {
    return this.httpClient.patch<void>(this.apiURL + '/' + studentObj.id,
      studentObj);
  }
}
