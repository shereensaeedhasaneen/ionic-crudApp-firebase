import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../show-employee/service/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
  employeeForm!:FormGroup;
  id:any='';
  constructor(
     private employeeServiceService:EmployeeServiceService,
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder // دا ال بكريت منه جروب فيه الفورم بتاعتي) { }
  ){

  }
  ngOnInit() {
    this.employeeForm=this.fb.group({
      id:new FormControl(''),
      name:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      details:new FormControl('')
    })

    this.id= (this.activatedRoute.snapshot.paramMap.get('id'))?.toString();
    console.log(this.id)
    this.employeeServiceService.getSpecificEmployee(this.id).valueChanges().subscribe(res=>{
      console.log(res)
      /*this.employeeForm.patchValue({
        name:res.name,
        email:res.email,
        mobile:res.mobile,
        details:res.details
      })*/

      // OR //
      this.employeeForm.setValue(res)
    })
  }

  EditEmployee(){
    this.employeeServiceService.updateEmployee(this.employeeForm.value,this.id)
    .then(res=>{
      console.log(res)
      this.route.navigateByUrl('/')
    })
    .catch(err=>console.log(err))
  }

}
