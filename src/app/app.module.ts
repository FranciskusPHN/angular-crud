import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CreateUnitComponent } from './unit/create-unit/create-unit.component';
import { UnitListComponent } from './unit/unit-list/unit-list.component';
import { UnitDetailComponent } from './unit/unit-detail/unit-detail.component';
import { UpdateUnitComponent } from './unit/update-unit/update-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    EmployeeDetailComponent,
    CreateUnitComponent,
    UnitListComponent,
    UnitDetailComponent,
    UpdateUnitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }