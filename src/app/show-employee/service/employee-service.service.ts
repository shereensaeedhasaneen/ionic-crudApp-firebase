import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import {AngularFireList,AngularFireObject , AngularFireDatabase} from '@angular/fire/compat/database';
// AngularFireList => عشان هستقبل الحاجات في ال get  علي شكل ليست
// AngularFireObject => عشان وانا ببعت الداتا هبعت اوبجيكت
// AngularFireDatabase => هخزن الداتا في الداتابيز
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  EmployeeListRef !: AngularFireList<any>;
  EmployeeRef !: AngularFireObject<any>;

  constructor(private db:AngularFireDatabase) {
    this.EmployeeListRef = db.list('/employee')
  }

  createEmployee(emp:Employee){
    return this.EmployeeListRef.push(emp);
    // OR
    /*return this.EmployeeListRef.push({
      name:emp.name,
      email:emp.email,
      mobile:emp.mobile,
      details:emp.details
    });*/
  }

  getSpecificEmployee(id:string){
   // EmployeeRef ==> دا من نوع اوبجيكت يعني هيرجع اوبجيكت واحد بس
    return this.EmployeeRef=this.db.object('/employee/'+id)
  }

  getAllEmployee(){
    // EmployeeRef ==> دا من نوع اوبجيكت يعني هيرجع اوبجيكت واحد بس
     return this.EmployeeListRef=this.db.list('/employee')
   }

   updateEmployee(emp:Employee , id:string){
    // EmployeeRef => استخدمنا دي عشان هنعدل علي اوبجيكت واحد بس
    return this.EmployeeRef.update({
      id:id,
      name:emp.name,
      email:emp.email,
      mobile:emp.mobile,
      details:emp.details
    });
  }

  deleteSpecificEmployee(id:string){
    // EmployeeRef => استخدمنا دي عشان هيمسح علي اوبجيكت واحد بس
    this.db.object('/employee/'+id).remove()
   }
}
