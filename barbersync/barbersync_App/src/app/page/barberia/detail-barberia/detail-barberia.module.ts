import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBarberiaPageRoutingModule } from './detail-barberia-routing.module';

import { DetailBarberiaPage } from './detail-barberia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBarberiaPageRoutingModule
  ],
  declarations: [DetailBarberiaPage]
})
export class DetailBarberiaPageModule {}
