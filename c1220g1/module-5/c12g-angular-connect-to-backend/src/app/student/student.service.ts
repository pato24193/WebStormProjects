import { Injectable } from '@angular/core';
import {Student} from "./student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public API_URL = "http://localhost:3000/studentList";

  constructor(private httpClient: HttpClient) { }

  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + "/" + studentId);
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  update(studentObj: Student): Observable<void> {
    return this.httpClient.put<void>(this.API_URL + "/" + studentObj.id, studentObj);
  }

  deleteStudent(studentId: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + "/" + studentId);
  }
}
