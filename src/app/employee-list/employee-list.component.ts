import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Budget[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    // this.employeeService.getEmployees()
    //   .subscribe((response) => {
    //     this.employees = response;
    //   });
    this.employeeService.getEmployees()
      .subscribe((data: Budget[]) =>{
        this.employees = data;
        // console.log(this.employees)
      })
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }

}