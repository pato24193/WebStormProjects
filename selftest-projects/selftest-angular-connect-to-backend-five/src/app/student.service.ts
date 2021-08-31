import {Injectable} from '@angular/core';
import {Student} from './student';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API_URL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) {
  }

  findById(studentId: number): Observable<Student> {
    // Call API
    return this.httpClient.get<Student>(this.API_URL + '/' + studentId);
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  saveUpdate(studentObj: Student): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + studentObj.id, studentObj);
  }

  deleteById(studentId: number): Observable<void> {
    console.log('zo');
    return this.httpClient.delete<void>(this.API_URL + '/' + studentId);
  }
}
