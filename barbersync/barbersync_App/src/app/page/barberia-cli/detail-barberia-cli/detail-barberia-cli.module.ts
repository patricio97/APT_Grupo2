import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBarberiaCliPageRoutingModule } from './detail-barberia-cli-routing.module';

import { DetailBarberiaCliPage } from './detail-barberia-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBarberiaCliPageRoutingModule
  ],
  declarations: [DetailBarberiaCliPage]
})
export class DetailBarberiaCliPageModule {}
