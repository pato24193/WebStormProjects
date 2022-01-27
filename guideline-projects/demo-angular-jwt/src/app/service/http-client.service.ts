import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }


  getEmployees() {
    const tokenBearer = sessionStorage.getItem('token');

    const headers = new HttpHeaders({Authorization: tokenBearer});

    return this.httpClient.get<Employee[]>('http://localhost:8080/employees', {headers});
  }

  public deleteEmployee(employee) {
    const tokenBearer = sessionStorage.getItem('token');

    const headers = new HttpHeaders({Authorization: tokenBearer});

    return this.httpClient.delete<Employee>('http://localhost:8080/employees' + '/' + employee.empId, {headers});
  }

  public createEmployee(employee) {
    const tokenBearer = sessionStorage.getItem('token');

    const headers = new HttpHeaders({Authorization: tokenBearer});

    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee, {headers});
  }
}
