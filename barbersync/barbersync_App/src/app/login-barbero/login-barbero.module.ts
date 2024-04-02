import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBarberoPageRoutingModule } from './login-barbero-routing.module';

import { LoginBarberoPage } from './login-barbero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBarberoPageRoutingModule
  ],
  declarations: [LoginBarberoPage]
})
export class LoginBarberoPageModule {}
