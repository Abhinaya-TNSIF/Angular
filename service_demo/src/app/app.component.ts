import { Component } from '@angular/core';
import { Employee } from './app.module';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service_demo';

  employee:Employee[] = [];


  //private emp = Inject(EmployeeService)


  constructor(private employeeservice:EmployeeService)
  {
    this.employee = this.employeeservice.getEmp();
  }

courses:string[] = ["Java","JFS", "MernStack", "Meanstack"]



}
