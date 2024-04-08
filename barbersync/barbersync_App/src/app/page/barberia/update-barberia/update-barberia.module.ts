import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBarberiaPageRoutingModule } from './update-barberia-routing.module';

import { UpdateBarberiaPage } from './update-barberia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBarberiaPageRoutingModule
  ],
  declarations: [UpdateBarberiaPage]
})
export class UpdateBarberiaPageModule {}
