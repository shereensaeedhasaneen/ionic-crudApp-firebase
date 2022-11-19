import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowEmployeePageRoutingModule } from './show-employee-routing.module';

import { ShowEmployeePage } from './show-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowEmployeePageRoutingModule
  ],
  declarations: [ShowEmployeePage]
})
export class ShowEmployeePageModule {}
