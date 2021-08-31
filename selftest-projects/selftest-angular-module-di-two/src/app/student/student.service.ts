import {Injectable} from '@angular/core';
import {Student} from './student';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class StudentService {

  private API_URL = 'http://localhost:3000/studentList';
  public msg = 'Haha';

  constructor(private httpClient: HttpClient) {
  }

  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + '/' + studentId);
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }
}
