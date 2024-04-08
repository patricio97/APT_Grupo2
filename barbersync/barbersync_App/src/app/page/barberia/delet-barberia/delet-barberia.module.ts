import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletBarberiaPageRoutingModule } from './delet-barberia-routing.module';

import { DeletBarberiaPage } from './delet-barberia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletBarberiaPageRoutingModule
  ],
  declarations: [DeletBarberiaPage]
})
export class DeletBarberiaPageModule {}
