import { Injectable } from '@angular/core';
import { Employee } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

employee:Employee[] = 

[

{id:1,name:"Shanthi",role:"MD",location:"Bangalore"},
{id:2,name:"Preethi",role:"Manager",location:"Chennai"},
{id:3,name:"Nishanth",role:"Asst.manager",location:"Delhi"},
{id:4,name:"Akbar",role:"CEO",location:"Mumbai"},

]


getEmp():Employee[]
{
  return this.employee;
}


}
