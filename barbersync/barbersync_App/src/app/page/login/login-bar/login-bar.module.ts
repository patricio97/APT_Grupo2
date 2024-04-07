import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBarPageRoutingModule } from './login-bar-routing.module';

import { LoginBarPage } from './login-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBarPageRoutingModule
  ],
  declarations: [LoginBarPage]
})
export class LoginBarPageModule {}
