import { Employee } from './model/employee';
import { EmployeeServiceService } from './service/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.page.html',
  styleUrls: ['./show-employee.page.scss'],
})
export class ShowEmployeePage implements OnInit {

  employees:Employee[]=[];
  constructor(private employeeServiceService:EmployeeServiceService) { }

  ngOnInit() {
    this.fetchEmployees()

  }

  fetchEmployees(){
     // this function will get data without ID
    /*this.employeeServiceService.getAllEmployee().valueChanges().subscribe(res=>{
      console.log(res)
      this.employees=res
    })*/

    // this function will get data with ID
    this.employeeServiceService.getAllEmployee().snapshotChanges().subscribe((res)=>{
      console.log(res)
      this.employees = res.map((c: { payload: { key: any; val: () => any; }; }) => ({ id: c.payload.key, ...c.payload.val() }));
      console.log(this.employees)
    })
  }

  deleteEmployee(id:string){
    console.log(id)
    if(window.confirm('Are you sure ? ')){
      this.employeeServiceService.deleteSpecificEmployee(id)
    }
  }

}
