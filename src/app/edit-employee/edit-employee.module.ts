import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployeePageRoutingModule } from './edit-employee-routing.module';

import { EditEmployeePage } from './edit-employee.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditEmployeePageRoutingModule
  ],
  declarations: [EditEmployeePage]
})
export class EditEmployeePageModule {}
