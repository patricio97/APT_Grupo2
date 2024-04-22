import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBarberiaPageRoutingModule } from './add-barberia-routing.module';

import { AddBarberiaPage } from './add-barberia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBarberiaPageRoutingModule
  ],
  declarations: [AddBarberiaPage]
})
export class AddBarberiaPageModule {}