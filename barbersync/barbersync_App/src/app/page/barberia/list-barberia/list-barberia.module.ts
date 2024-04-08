import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBarberiaPageRoutingModule } from './list-barberia-routing.module';

import { ListBarberiaPage } from './list-barberia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBarberiaPageRoutingModule
  ],
  declarations: [ListBarberiaPage]
})
export class ListBarberiaPageModule {}
