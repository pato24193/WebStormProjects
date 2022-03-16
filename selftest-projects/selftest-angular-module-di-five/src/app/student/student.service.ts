import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)
export class StudentService {

  API_URL = 'http://localhost:3000/studentList';
  abc = 'Hello C';

  constructor(private httpClient: HttpClient) {
  }

  // get data by call API
  findById(studentId: number): Observable<Student> {
    // return this.httpClient.get<Student>(
    //   this.API_URL + '/' + studentId);
    return this.httpClient.jsonp<Student>(this.API_URL, 'JSONP_CALLBACK');
  }

  // get data by call API
  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  save(studentObj: Student): Observable<void> {
    return this.httpClient.patch<void>(
      this.API_URL + '/' + studentObj.id, studentObj);
  }

}
