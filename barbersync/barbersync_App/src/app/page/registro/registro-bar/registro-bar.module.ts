
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroBarPageRoutingModule } from './registro-bar-routing.module';
import { RegistroBarPage } from './registro-bar.page';
import { AuthService } from 'src/app/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroBarPageRoutingModule
  ],
  declarations: [RegistroBarPage],
  providers: [AuthService]
})
export class RegistroBarPageModule {}
