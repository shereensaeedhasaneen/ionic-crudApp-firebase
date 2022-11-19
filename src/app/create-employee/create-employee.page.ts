import { EmployeeServiceService } from './../show-employee/service/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  employeeForm!:FormGroup;
  constructor(
    private employeeServiceService:EmployeeServiceService,
    private route:Router,
    private fb:FormBuilder // دا ال بكريت منه جروب فيه الفورم بتاعتي
    ) { }

  ngOnInit() {
    this.employeeForm=this.fb.group({
      name:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      details:new FormControl('')
    })
  }

  formSubmit(){
   if(this.employeeForm.valid){
      console.log(this.employeeForm.value)
      this.employeeServiceService.createEmployee(this.employeeForm.value)
      .then(res=>{
        console.log(res)
        this.employeeForm.reset()
        this.route.navigateByUrl('/')
      })
      .catch(err=>console.log(err))
    }
  }
}
