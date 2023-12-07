import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorlistPageRoutingModule } from './doctorlist-routing.module';

import { DoctorlistPage } from './doctorlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorlistPageRoutingModule
  ],
  declarations: [DoctorlistPage]
})
export class DoctorlistPageModule {}
