import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroBarberoPageRoutingModule } from './registro-barbero-routing.module';

import { RegistroBarberoPage } from './registro-barbero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroBarberoPageRoutingModule
  ],
  declarations: [RegistroBarberoPage]
})
export class RegistroBarberoPageModule {}
