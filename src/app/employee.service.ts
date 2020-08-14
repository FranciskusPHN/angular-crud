import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Budget } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServer = "http://com-danliris-service-core-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiServer + 'master/budgets');
  }

  // getEmployees(): Observable<Budget[]> {
  //   return this.http.get(this.apiServer + 'master/budgets').map(res =>);
  // }

  createEmployee(employee: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.apiServer + 'master/budgets', employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.apiServer + `master/budgets/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put(`api/employee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`api/employee/${id}`, { responseType: 'text' });
  }
}