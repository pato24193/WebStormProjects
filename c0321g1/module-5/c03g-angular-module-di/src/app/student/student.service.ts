import {Injectable} from '@angular/core';
import {Student} from './student';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// C1
@Injectable({
  providedIn: 'root'
})

// C3
// @Injectable()
export class StudentService {

  msg = 'Hello';

  private API_URL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) {
  }

  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + '/' + studentId);
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }
}
